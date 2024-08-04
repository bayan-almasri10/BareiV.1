import {jwtVerify } from "jose";
const secretKey = "TestKey";
const key = new TextEncoder().encode(secretKey);

export async function decrypt(input){
  try{
    const { payload } = await jwtVerify(input, key, {
      algorithms: ["HS256"],
    });
    return payload;
  }catch(error){
    console.log("Token invalid decrypt");
    // return { error: "Token invalid decrypt"};
    return null
  }
}
export async function getUserRole(token) {
  const payload = await decrypt(token);
  return payload.user.role;
}

