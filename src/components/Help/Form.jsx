'use client'
import "./globals.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Help() {
  return (
    <div className="form-container my-40 mx-auto">
      <div className="text-center mb-10 pt-4">
        <h1 className="text-xl ">مركز المساعدة</h1>
        <br />
        <p className="text-base">مرحباً، كيف يمكننا مساعدتك؟</p>
      </div>
      <div className="w-3/4 pb-28 mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <div className=" hover:bg-slate-200 bg-white h-14 pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className=" bi bi-truck -mb-11 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
              </svg>
              <AccordionTrigger className="mr-10 hover:text-fuchsia-600">
                توصيل{" "}
              </AccordionTrigger>
            </div>
            <AccordionContent>
              <Accordion type="single" collapsible className="pt-2">
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12 bg-zinc-50">
                    متى سيتم توصيل طلبك؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-6">
                    للتحقق من حالة تسليم طلبك ، يمكنك اتباع الخطوات التالية{" "}
                    <br />
                    المرحلة 1: تسجيل الدخول إلى حسابك
                    <br />
                    الخطوة 2: انقر فوق الزر حسابي وحدد طلبات من القائمة
                    المنسدلة
                    <br />
                    الخطوة 3: حدد مكان الطلب الذي ترغب في التحقق من حالة التسليم
                    الخاصة به وانقر فوق الزر عرض التفاصيل
                    <br />
                    الخطوة 4: في صفحة تفاصيل الطلب ، ستتمكن من رؤية حالة التسليم
                    في قسم معلومات الطلب. ستشير حالةالتسليم إلى ما إذا كان قد
                    تم شحن الطلب ، أو في طريقه إلى النقل ، أو تم تسليمه
                    <br />
                    الخطوة 5: إذا كانت حالة التسليم شحنها،يمكنك النقر فوق تتبع
                    طرد لعرض معلومات تتبع التسليم
                    <br />
                    الخطوة 6: إذا كانت لديك أي مخاوف بشأن حالة التسليم ، فيمكنك
                    الاتصال بفريق خدمة عملاء جوميا بالنقر فوقالزر تعليمات في
                    أعلى يمين الصفحة واختيار الدردشة المباشرة من قائمة التمرير
                    <br />
                    يرجى ملاحظة أنه عند تقديم طلب ، يتم توفير وقت التسليم لكفي
                    يوم التسليم ، سيتصل بك موظف التوصيل أيضًا{" "}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12 ">
                    ماهي تكاليف التوصيل؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    {" "}
                    تكاليف التوصيل هي التكاليف التي يتكبدها بارع وشركاؤها
                    اللوجيستية لتوصيل طلبك إلى العنوان المحدد. قد يختلف مقدار
                    تكاليف التسليم اعتمادًا على عوامل مثل موقعك الجغرافي وطريقة
                    التسليم المختارة وطريقة الشحن وحجم أو فئة المنتج المطلوب.
                    يمكنك عرض تكاليف التسليم قبل تقديم طلبك على صفحة المنتج
                    واثناء عملية الدفع{" "}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12 bg-zinc-50">
                    كيف أتتبع التسليم الخاص بي؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    لتتبع توصيلك على بارع ، يمكنك اتباع الخطوات التالية <br />
                    المرحلة 1: تسجيل الدخول إلى حسابك
                    <br />
                    الخطوة 2: انقر فوق الزر حسابي وحدد طلبات من القائمة
                    المنسدلة
                    <br />
                    الخطوة 3: حدد الطلب الذي تريد تتبع توصيله وانقر على الزر
                    عرض التفاصيل
                    <br />
                    الخطوة 4: في صفحة تفاصيل الطلب ، ابحث عن حالة التسليم في قسم
                    معلومات الطلب. إذا كانت حالة التسليم شحنها، يمكنك النقر
                    فوق الزر تتبع الحزمة
                    <br />
                    الخطوة 5: سينقلك هذا إلى صفحة تتبع التسليم ، حيث يمكنك عرض
                    الحالة الحالية للتسليم وأي معلومات تتبع متاحة
                    <br />
                    الخطوة 6: إذا كانت لديك أي مخاوف بشأن حالة التسليم ، فيمكنك
                    الاتصال بفريق خدمة عملاء جوميا بالنقر فوق الزر تعليمات في
                    أعلى يمين الصفحة واختيار الدردشة المباشرة من قائمة التمرير
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12">
                    {" "}
                    ماذا لو لم أكن موجوداً لإستلام التوصيل الخاص بي؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    {" "}
                    إذا لم تكن متواجدًا لاستلام التوصيل ، فلديك الخيارات
                    التالية: <br />
                    يمكنك الترتيب مع شخص آخر لاستلامها نيابة عنك من خلال تقديم
                    اسمه وتفاصيل الاتصال إلى وكيل التوصيل. من المهم التأكد من أن
                    هذا الشخص متاح على نفس العنوان الذي تم توفيره عند تقديم طلبك
                    <br />
                    اتصل بوكيل التوصيل لإعادة جدولة التسليم في وقت أكثر ملاءمة
                    إذا لم تتمكن من ترتيب توصيل بديل ، يمكنك الاتصال بفريق خدمة
                    عملاء جوميا لطلب إعادة توصيل مجدولة. يمكنك الوصول إليهم
                    بالنقر فوق الزر مساعدة في الجزء العلوي الأيمن من الصفحة
                    واختيار الدردشة المباشرة
                    <br />
                    من القائمة المنسدلة
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12 bg-zinc-50">
                    هل يمكنني تغيير عنوان التوصيل بعد تقديم الطلب ؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    من المهم مراجعة وتأكيد دقة معلومات التوصيل الخاصة بك ، مثل
                    عنوانك ورقم هاتفك ، قبل تقديم طلب على
                    <br />
                    بارع بمجرد تقديم الطلب، لا يمكن تغيير معلومات التسليم.
                    للتأكد من تسليم طلبك بشكل صحيح ، يرجى التحقق <br />
                    من معلومات التسليم الخاصة بك على صفحة الخروج
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12">
                    ماذا أفعل إذا لم يصل طلبي في الوقت المحدد؟
                  </AccordionTrigger>
                  <AccordionContent className="leading-7">
                    إذا لم يصل التسليم خلال الإطار الزمني المقدر ، فيمكنك اتباع
                    الخطوات التالية: <br />
                    تحقق من صفحة معلومات الطلب في حساب جوميا الخاص بك لمعرفة أي
                    تحديثات حول حالة التسليم
                    <br />
                    اتصل بوكيل التوصيل باستخدام معلومات الاتصال الواردة في
                    البريد الإلكتروني المرسل إليك عندما تكون الحزمة الخاصة بك
                   خارج للتسليم <br />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <div className=" hover:bg-slate-200 bg-white h-14 pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-credit-card -mb-11 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
              <AccordionTrigger className="mr-10 hover:text-fuchsia-600">
                تسديد{" "}
              </AccordionTrigger>
            </div>
            <AccordionContent>
              <Accordion type="single" collapsible className="pt-2">
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12 bg-zinc-50">
                    ماهي طرق الدفع على بارع؟
                  </AccordionTrigger>
                  <AccordionContent className="mt-1">
                    الدفع عند الاستلام يسمح نقدًا عند التسليم{" "}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <div className=" hover:bg-slate-100 bg-white h-14 pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-return-left -mb-11 mr-3"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
                />
              </svg>
              <AccordionTrigger className="mr-10 hover:text-fuchsia-600">
                الإرجاع و الإستيراد{" "}
              </AccordionTrigger>
            </div>
            <AccordionContent>
              <Accordion type="single" collapsible className="pt-2">
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12 bg-zinc-50">
                    ماهي سياسة الإرجاع الخاصة ب بارع؟
                  </AccordionTrigger>
                  <AccordionContent className="mt-1 leading-7 ">
                    {" "}
                    يقبل بارع إرجاع معظم المنتجات خلال 4 أيام من التسليم. لكي
                    تكون مؤهلاً للحصول على عائد ، يجب أن يكون المنتج في حالته
                    الأصلية و عبوته الأصلية ، مع بقاء جميع الملحقات والعلامات
                    سليمة
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="pt-2">
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12">
                    {" "}
                    كيف تبدأ عملية إرجاع على بارع؟
                  </AccordionTrigger>
                  <AccordionContent className="mt-1 leading-7 ">
                    {" "}
                    الخطوة 1: سجّل الدخول إلى حسابك على جوميا وانتقل إلى طلبات
                    <br /> الخطوة 2: انقر فوق طلب العنصر (العناصر) الذي ترغب في
                    إرجاعه
                    <br /> الخطوة 3: حدد العنصر (العناصر) التي ترغب في إرجاعها
                    وشرح سبب الإرجاع. قدم مزيدًا من التفاصيل لمساعدتنا في فهم
                    المشكلة
                    <br />
                    الخطوة 4: اختر طريقة الاسترداد المفضلة لديك
                    <br />
                    الخطوة 5: اختر ما إذا كنت تريد تسليم المنتج المرتجع شخصيًا
                    أو أن يقوم بارع بإستلامه
                    <br />
                    الخطوة 6: تحقق من معلوماتك وقدم طلب الإرجاع الخاص بك
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <div className=" hover:bg-slate-100 bg-white h-14 pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-shop-window -mb-11 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5" />
              </svg>
              <AccordionTrigger className="mr-10 hover:text-fuchsia-600">
                البيع على بارع{" "}
              </AccordionTrigger>
            </div>
            <AccordionContent>
              <Accordion type="single" collapsible className="pt-2">
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12 bg-zinc-50">
                    {" "}
                    ماهي شركة بارع؟
                  </AccordionTrigger>
                  <AccordionContent className="mt-1 leading-7 ">
                    موقعنا يعتبر وجهة رئيسية لأصحاب المشاريع اليدوية حيث يهدف
                    إلى توفير منصة رقمية مبتكرة تمكّن أصحاب المشاريع اليدوية من
                    عرض وتسويق منتجاتهم بشكل فعّال. يمكن للفنانين والحرفيين
                    اليدويين تحميل صور وتفاصيل حول إبداعاتهم ومنتجاتهم الفريدة
                    على الموقع، مما يسهم في تسليط الضوء على مواهبهم وجعلها متاحة
                    لجمهور واسع
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="pt-2">
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12">
                    {" "}
                    كيف تصبح بائع في بارع؟
                  </AccordionTrigger>
                  <AccordionContent className="mt-1 leading-7 ">
                    لكي تصبح بائعًا في بارع ، يجب عليك التسجيل كبائع على موقع
                    بارع ، أرسل كتالوج المنتجات و ابدأ البيع
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="pt-2">
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12 bg-zinc-50">
                    {" "}
                    مانوع المنتجات التي يمكنني بيعها على بارع؟{" "}
                  </AccordionTrigger>
                  <AccordionContent className="mt-1 leading-7 ">
                    يمكنك بيع مجموعة واسعة من المنتجات اليدوية و التقليدية
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="pt-2">
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12">
                    {" "}
                    كيف يمكنني إدراج منتجاتي في بارع؟{" "}
                  </AccordionTrigger>
                  <AccordionContent className="mt-1 leading-7 ">
                    لإدراج منتجاتك في بارع ، تحتاج إلى إنشاء حساب بائع، وتقديم
                    تفاصيل المنتج وتحميل صور المنتج
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <div className=" hover:bg-slate-100 bg-white h-14 pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16" 
                fill="currentColor"
                className="bi bi-send -mb-11 mr-3"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
              </svg>
              <AccordionTrigger className="mr-10 hover:text-fuchsia-600">
                طلبات{" "}
              </AccordionTrigger>
            </div>
            <AccordionContent>
              <Accordion type="single" collapsible className="pt-2">
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12 bg-zinc-50">
                    كيف تقدم طلب طلب منتج في بارع؟{" "}
                  </AccordionTrigger>
                  <AccordionContent className="mt-1 leading-7 ">
                    المرحلة 1 : تصفح وحدد المنتج (المنتجات) المطلوب
                    <br />
                    الخطوة 2 : انقر فوق إضافة إلى عربة التسوق
                    <br />
                    الخطوة 3 : تحقق من العناصر في عربة التسوق الخاصة بك وقم
                    بإجراء التعديلات اللازمة
                    <br />
                    الخطوة 4 : قم بتأكيد طلبك وانتظر التوصيل
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="pt-2">
                <AccordionItem value="item-1" className=" w-10/12 mx-5">
                  <AccordionTrigger className=" hover:bg-zinc-100 h-12 ">
                    {" "}
                    كيف أتتبع طلباتي؟
                  </AccordionTrigger>
                  <AccordionContent className="mt-1 leading-7 ">
                    الخطوة 1: قم بتسجيل الدخول إلى حساب بارع الخاص بك
                    <br />
                    الخطوة 2: اذهب إلى قسم طلباتي
                    <br />
                    الخطوة 3: ابحث عن طلبك وانقر على عرض التفاصيل ، ثم انقر
                    على سجل الحالة
                    <br />
                    الخطوة 4: سترى الحالة الحالية لطلبك ، بما في ذلك وقت التسليم
                    المقدر
                    <br />
                    يمكنك أيضًا استخدام رابط التتبع الذي يتم إرساله إليك عبر
                    البريد الإلكتروني عند شحن طردك لتتبع طلبك. إذا كان لديك أي
                    أسئلة حول حالة طلبك ، يمكنك الاتصال بدعم عملاء جوميا للحصول
                    على المساعدة
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
