"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategory, getSearchByCategory } from '@/util/serverActions';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';

export default function SupNav() {
  const [categories, setCategories] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesData, searchByCategoryData] = await Promise.all([
          getCategory(),
          getSearchByCategory()
        ]);
        setCategories(categoriesData);
        console.log(searchByCategoryData); // يمكنك استخدام بحث الفئة هنا
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="navbar block position-fixed z-50 top-[65px] w-full h-max bg-white drop-shadow-lg pb-0">
      <div className="r2 py-1 flex justify-center">
        <Menubar className="py-4">
          {categories?.category.map((cate) => (
            <div key={cate.id}>
              <MenubarMenu>
                <MenubarTrigger className="text-sm">{cate.name}</MenubarTrigger>
                <MenubarContent>
                  {cate.subCategory.map((subCat) => (
                    <Link href={`/products/search?q=${subCat.name}`} key={subCat.id}>
                        <MenubarItem>{subCat.name}</MenubarItem>
                    </Link>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </div>
          ))}
        </Menubar>
      </div>
    </div>
  );
}
