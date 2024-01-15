import socialWb from "@app/resource/img/social-wb.png";
import socialWx from "@app/resource/img/social-wx.png";
import logo from "@app/resource/img/logo.png";
import iconMenuCollapse from "@app/resource/img/menu-collapse.png"

export default function Footer() {
  const today = new Date();
  
  const handleClick = (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.nextElementSibling) {
      if (Array.from(target.nextElementSibling.classList).includes('hidden')) {
        target.parentNode.classList.remove('after:block');
        target.nextElementSibling.classList.remove('hidden');
        target.querySelector('img').classList.add('rotate-180');
      } else {
        target.parentNode.classList.add('after:block');
        target.nextElementSibling.classList.add('hidden');
        target.querySelector('img').classList.remove('rotate-180');
      }
    } 
  }

  return (
    <>
      <footer className="footer bg-primary pt-0 lg:pt-12 flex-none">
        <section className="px-0 lg:px-5 container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between mb-12 lg:mb-24">
            <div className="flex flex-col lg:flex-row">
              <dl className="mr-0 lg:mr-20 lg:overflow-visible after:relative after:border-b-[#505050] after:border-b-[1px] after:block lg:after:hidden after:w-[calc(100%-2rem)] after:left-4 ">
                <dt onClick={handleClick} className="px-5 lg:px-0 text-info text-xs lg:text-sm font-semibold h-[3.25rem] lg:h-9 flex items-center justify-between lg:block">
                  关于我们
                  <img className="block lg:hidden w-[0.6875rem]" src={iconMenuCollapse.src} alt="iconMenuCollapse" />
                </dt>
                <dd className="bg-[#01407b] lg:bg-primary px-5 lg:px-0 pt-2 pb-4 hidden lg:block">
                  <a className="text-info text-sm flex lg:block items-center h-8 lg:h-8 leading-8" href="/about">公司介绍</a>
                  <a className="text-info text-sm flex lg:block items-center h-8 lg:h-8 leading-8" href="/about">企业动态</a>
                </dd>
              </dl>
              <dl className="mr-0 lg:mr-20 lg:overflow-visible after:relative after:border-b-[#505050] after:border-b-[1px] after:block lg:after:hidden after:w-[calc(100%-2rem)] after:left-4 ">
                <dt onClick={handleClick} className="px-5 lg:px-0 text-info text-xs lg:text-sm font-semibold h-[3.25rem] lg:h-9 flex items-center justify-between lg:block">
                  产品介绍
                  <img className="block lg:hidden w-[0.6875rem]" src={iconMenuCollapse.src} alt="iconMenuCollapse" />
                </dt>
                <dd className="bg-[#01407b] lg:bg-primary px-5 lg:px-0 pt-2 pb-4 hidden lg:block">
                  <a className="text-info text-sm flex lg:block items-center h-8 lg:h-8 leading-8" href="/products">乳腺标本成像</a>
                  <a className="text-info text-sm flex lg:block items-center h-8 lg:h-8 leading-8" href="/products">乳腺活检旋切</a>
                  <a className="text-info text-sm flex lg:block items-center h-8 lg:h-8 leading-8" href="/products">组织标记示踪</a>
                  <a className="text-info text-sm flex lg:block items-center h-8 lg:h-8 leading-8" href="/products">乳腺腔镜手术</a>
                </dd>
              </dl>
              <dl className="mr-0 lg:mr-20 lg:overflow-visible after:relative after:border-b-[#505050] after:border-b-[1px] after:block lg:after:hidden after:w-[calc(100%-2rem)] after:left-4 ">
                <dt onClick={handleClick} className="px-5 lg:px-0 text-info text-xs lg:text-sm font-semibold h-[3.25rem] lg:h-9 flex items-center justify-between lg:block">
                  资讯中心
                  <img className="block lg:hidden w-[0.6875rem]" src={iconMenuCollapse.src} alt="iconMenuCollapse" />
                </dt>
                <dd className="bg-[#01407b] lg:bg-primary px-5 lg:px-0 pt-2 pb-4 hidden lg:block">
                  <a className="text-info text-sm flex lg:block items-center h-8 lg:h-8 leading-8" href="/news">行业信息</a>
                  <a className="text-info text-sm flex lg:block items-center h-8 lg:h-8 leading-8" href="/news">临床进展</a>
                  <a className="text-info text-sm flex lg:block items-center h-8 lg:h-8 leading-8" href="/news">创新技术</a>
                </dd>
              </dl>
              <dl className="mr-0 lg:mr-20 lg:overflow-visible after:relative after:border-b-[#505050] after:border-b-[1px] after:block lg:after:hidden after:w-[calc(100%-2rem)] after:left-4 ">
                <dt onClick={handleClick} className="px-5 lg:px-0 text-info text-xs lg:text-sm font-semibold h-[3.25rem] lg:h-9 flex items-center justify-between lg:block">
                  客户服务
                  <img className="block lg:hidden w-[0.6875rem]" src={iconMenuCollapse.src} alt="iconMenuCollapse" />
                </dt>
                <dd className="bg-[#01407b] lg:bg-primary px-5 lg:px-0 pt-2 pb-4 hidden lg:block">
                  <a className="text-info text-sm flex lg:block items-center h-8 lg:h-8 leading-8" href="">技术支持</a>
                  <a className="text-info text-sm flex lg:block items-center h-8 lg:h-8 leading-8" href="">投诉建议</a>
                  <a className="text-info text-sm flex lg:block items-center h-8 lg:h-8 leading-8" href="">代理合作</a>
                </dd>
              </dl>
              <dl className="mr-0 lg:mr-20 lg:overflow-visible after:relative after:border-b-[#505050] after:border-b-[1px] after:block lg:after:hidden after:w-[calc(100%-2rem)] after:left-4 ">
                <dt onClick={handleClick} className="px-5 lg:px-0 text-info text-xs lg:text-sm font-semibold h-[3.25rem] lg:h-9 flex items-center justify-between lg:block">
                  人才招聘
                  <img className="block lg:hidden w-[0.6875rem]" src={iconMenuCollapse.src} alt="iconMenuCollapse" />
                </dt>
                <dd className="bg-[#01407b] lg:bg-primary px-5 lg:px-0 pt-2 pb-4 hidden lg:block">
                  <a className="text-info text-sm flex lg:block items-center h-8 lg:h-8 leading-8" href="/job">社会招聘</a>
                  <a className="text-info text-sm flex lg:block items-center h-8 lg:h-8 leading-8" href="/job">校园招聘</a>
                </dd>
              </dl>
              <dl className="mr-0 lg:mr-20 lg:overflow-visible after:relative after:border-b-[#505050] after:border-b-[1px] after:block lg:after:hidden after:w-[calc(100%-2rem)] after:left-4 ">
                <dt onClick={handleClick} className="px-5 lg:px-0 text-info text-xs lg:text-sm font-semibold h-[3.25rem] lg:h-9 flex items-center justify-between lg:block">
                  联系我们
                </dt>
              </dl>
            </div>
            <div className="flex mt-9 lg:mt-0 px-4 lg:px-0">
              <a href=""><img className="w-10 lg:w-12 h-10 lg:h-12 mx-1" src={socialWb.src} alt="微博" /></a>
              <a href=""><img className="w-10 lg:w-12 h-10 lg:h-12 mx-1" src={socialWx.src} alt="微信" /></a>
            </div>
          </div>
        </section>
        <section className="container mx-auto border-solid border-t border-[#f2f2f2] px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row items-start lg:items-center text-primary-200 lg:text-info text-sm py-8">
            <img className="w-auto h-6 lg:w-48 lg:h-full mb-5 lg:mb-0" src={logo.src} alt="footer logo" />
            <div className="lg:ml-5">
              <ul className="flex flex-wrap my-1">
                <li className="shrink-0"><a href="">Privacy Policy</a></li>
                <li className="shrink-0"><span className="px-1 lg:px-2">|</span><a href="">Terms of Service</a></li>
              </ul>
              <div className="my-1">Copyright © {today.getFullYear()} JECAN Inc. All rights reserved</div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
