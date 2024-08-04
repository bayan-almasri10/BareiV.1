import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getUserRole } from "@/lib/auth"
const login = async (email,password) => {
    'use server'
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`,{
            method:'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                email: `${email}`,
                password: `${password}`
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const response = await data.json();
        const role = await getUserRole(response.token)

        console.log(await getUserRole(response.token),response.token);
        cookies().set('token', response.token, { secure: true })
        if(role =='seller')
            redirect('/dashboard');
        else if (role == 'admin')
            redirect("https://barei.cloudns.be/admin")
        else if(role == 'customer')
            redirect('/products')
    };
const signUp = async (email,password,rePassword,roleId,storeName = null) => {
    'use server'
        const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register`,{
            method:'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                email: email,
                password: password,
                rePassword: rePassword,
                roleId: roleId,
                storeName: storeName ? storeName : null
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const response = await data.json();
        console.log(email,password,rePassword,roleId,storeName,response,response.status );
        redirect('/login');
    };
export {login,signUp};