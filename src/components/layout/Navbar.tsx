import classNames from "classnames";
import { useState } from "react";
import logo from "@app/resource/img/logo.png";
import iconMenu from "@app/resource/img/menu.png";
import iconMenuCollapse from "@app/resource/img/menu-collapse.png"

interface Prop {
  menu?: string;
}

export default function Navbar({
  props,
}: {
  props
}) {
  const { menu } = props;
  const menuClass = 'text-sm lg:text-lg h-16 lg:h-full flex items-center group-hover:text-hover whitespace-nowrap lg:px-1 px-8 flex justify-between';
  const menuClassLast = (m) => classNames(menuClass, { 'text-hover': menu === m, 'text-primary lg:text-info': menu !== m });

  const navClass = 'h-[calc(100%-5rem)] lg:h-full lg:block absolute lg:static z-50 top-20 left-0 w-full lg:w-auto bg-[#fff] lg:bg-primary';
  const navClassLast = () => classNames(navClass, { hidden: !menuState });

  const [menuState, setMenuState] = useState(false);

  function handleExpandMenu(event) {
    event.preventDefault();
    setMenuState(!menuState);
  }

  const handleExpandSubmenu = (event) => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    if (mediaQuery) {
      return false;
    } else {
      event.preventDefault();
    }
    const target = event.target;
    if (target.nextElementSibling) {
      if (Array.from(target.nextElementSibling.classList).includes('hidden')) {
        target.parentNode.classList.remove('after:block');
        target.classList.remove('group-hover:text-hover')
        target.nextElementSibling.classList.remove('hidden', 'group-hover:block');
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
      <header className="header bg-primary h- border-b-[5px] sm:border-b-10 border-hover flex-none">
        <div className="header container mx-auto h-20 lg:h-40 flex justify-center lg:justify-between items-center">
          <a onClick={handleExpandMenu} className="block lg:hidden h-20 absolute top-0 left-0">
            <img className="h-full" src={iconMenu.src} alt="icon-menu" />
          </a>
          <a href="/" className="lg:shrink-0 text-center">
            <img className="h-6 lg:h-auto md:w-auto lg:w-60 xl:w-80" src={logo.src} alt="logo" />
          </a>
          <nav className={navClassLast()}>
            <ul className="flex flex-col lg:flex-row h-full ">
              <li className="group relative ml-0 lg:ml-8 after:relative after:border-[#505050] after:border-b-[1px] after:block lg:after:hidden after:w-[calc(100%-2rem)] after:left-4">
                <a onClick={handleExpandSubmenu} className={menuClassLast('about')} href="/about">
                  关于我们
                  {/* rotate-180 */}
                  <img className="block lg:hidden w-4" src={iconMenuCollapse.src} alt="iconMenuCollapse" />
                </a>
                <dl className="hidden group-hover:block relative lg:absolute w-full lg:w-auto bg-info z-50 px-8 lg:px-16 pt-3 lg:pt-7 pb-6 lg:pb-12  lg:-left-[4rem] shadow-none lg:shadow-xl rounded-none lg:rounded-b-3xl">
                  <dt className="hidden lg:block whitespace-nowrap py-2">
                    <a className="text-sm font-semibold lg:text-xl text-primary" href="/about">关于我们</a>
                  </dt>
                  <dd className="whitespace-nowrap py-2">
                    <a className="text-sm lg:text-xl text-primary" href="/about">公司介绍</a>
                  </dd>
                  <dd className="whitespace-nowrap py-2">
                    <a className="text-sm lg:text-xl text-primary" href="/about">企业动态</a>
                  </dd>
                </dl>
              </li>
              <li className="group relative ml-0 lg:ml-8 after:relative after:border-[#505050] after:border-b-[1px] after:block lg:after:hidden after:w-[calc(100%-2rem)] after:left-4">
                <a onClick={handleExpandSubmenu} className={menuClassLast('products')} href="/products">
                  产品系列
                  <img className="block lg:hidden w-4" src={iconMenuCollapse.src} alt="iconMenuCollapse" />
                </a>
                <dl className="hidden group-hover:block relative lg:absolute w-full lg:w-auto bg-info z-50 px-8 lg:px-16 pt-3 lg:pt-7 pb-6 lg:pb-12 lg:-left-[4rem] shadow-none lg:shadow-xl rounded-none lg:rounded-b-3xl">
                  <dt className="whitespace-nowrap py-2">
                    <a className="text-sm font-semibold lg:text-xl text-primary" href="/product/breast-specimen-imaging">产品系列</a>
                  </dt>
                  <dd className="whitespace-nowrap py-2">
                    <a className="text-sm lg:text-xl text-primary" href="/product/breast-specimen-imaging">乳腺标本成像</a>
                  </dd>
                  <dd className="whitespace-nowrap py-2">
                    <a className="text-sm lg:text-xl text-primary" href="/product/breast-specimen-imaging">乳腺活检旋切</a>
                  </dd>
                  <dd className="whitespace-nowrap py-2">
                    <a className="text-sm lg:text-xl text-primary" href="/product/breast-specimen-imaging">乳腺活检旋切</a>
                  </dd>
                  <dd className="whitespace-nowrap py-2">
                    <a className="text-sm lg:text-xl text-primary" href="/product/breast-specimen-imaging">乳腺腔镜手术</a>
                  </dd>
                </dl>
              </li>
              <li className="group relative ml-0 lg:ml-8 after:relative after:border-[#505050] after:border-b-[1px] after:block lg:after:hidden after:w-[calc(100%-2rem)] after:left-4">
                <a onClick={handleExpandSubmenu} className={menuClassLast('service')} href="/service">
                  客户服务
                  <img className="block lg:hidden w-4" src={iconMenuCollapse.src} alt="iconMenuCollapse" />
                </a>
                <dl className="hidden group-hover:block relative lg:absolute w-full lg:w-auto bg-info z-50 px-8 lg:px-16 pt-3 lg:pt-7 pb-6 lg:pb-12 lg:-left-[4rem] shadow-none lg:shadow-xl rounded-none lg:rounded-b-3xl">
                  <dt className="whitespace-nowrap py-2">
                    <a className="text-sm font-semibold lg:text-xl text-primary" href="">客户服务</a>
                  </dt>
                  <dd className="whitespace-nowrap py-2">
                    <a className="text-sm lg:text-xl text-primary" href="">技术支持</a>
                  </dd>
                  <dd className="whitespace-nowrap py-2">
                    <a className="text-sm lg:text-xl text-primary" href="">投诉建议</a>
                  </dd>
                  <dd className="whitespace-nowrap py-2">
                    <a className="text-sm lg:text-xl text-primary" href="">代理合作</a>
                  </dd>
                </dl>
              </li>
              <li className="group relative ml-0 lg:ml-8 after:relative after:border-[#505050] after:border-b-[1px] after:block lg:after:hidden after:w-[calc(100%-2rem)] after:left-4">
                <a onClick={handleExpandSubmenu} className={menuClassLast('news')} href="/news">
                  资讯中心
                  <img className="block lg:hidden w-4" src={iconMenuCollapse.src} alt="iconMenuCollapse" />
                </a>
                <dl className="hidden group-hover:block relative lg:absolute w-full lg:w-auto bg-info z-50 px-8 lg:px-16 pt-3 lg:pt-7 pb-6 lg:pb-12 lg:-left-[4rem] shadow-none lg:shadow-xl rounded-none lg:rounded-b-3xl">
                  <dt className="whitespace-nowrap py-2">
                    <a className="text-sm font-semibold lg:text-xl text-primary" href="/news">资讯中心</a>
                  </dt>
                  <dd className="whitespace-nowrap py-2">
                    <a className="text-sm lg:text-xl text-primary" href="/news">行业信息</a>
                  </dd>
                  <dd className="whitespace-nowrap py-2">
                    <a className="text-sm lg:text-xl text-primary" href="/news">临床进展</a>
                  </dd>
                  <dd className="whitespace-nowrap py-2">
                    <a className="text-sm lg:text-xl text-primary" href="/news">创新技术</a>
                  </dd>
                </dl>
              </li>
              <li className="group relative ml-0 lg:ml-8 after:relative after:border-[#505050] after:border-b-[1px] after:block lg:after:hidden after:w-[calc(100%-2rem)] after:left-4">
                <a onClick={handleExpandSubmenu} className={menuClassLast('job')} href="/job">
                  人才招聘
                  <img className="block lg:hidden w-4" src={iconMenuCollapse.src} alt="iconMenuCollapse" />
                </a>
                <dl className="hidden group-hover:block relative lg:absolute w-full lg:w-auto bg-info z-50 px-8 lg:px-16 pt-3 lg:pt-7 pb-6 lg:pb-12 lg:-left-[4rem] shadow-none lg:shadow-xl rounded-none lg:rounded-b-3xl">
                  <dt className="whitespace-nowrap py-2">
                    <a className="text-sm font-semibold lg:text-xl text-primary" href="/job">人才招聘</a>
                  </dt>
                  <dd className="whitespace-nowrap py-2">
                    <a className="text-sm lg:text-xl text-primary" href="/job">社会招聘</a>
                  </dd>
                  <dd className="whitespace-nowrap py-2">
                    <a className="text-sm lg:text-xl text-primary" href="/job">校园招聘</a>
                  </dd>
                </dl>
              </li>
              <li className="group relative ml-0 lg:ml-8 after:relative after:border-primary-200 after:block after:w-[calc(100%-mdem)] after:left-4">
                <a onClick={handleExpandSubmenu} className={menuClassLast('contact')} href="/contact">联系我们</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
