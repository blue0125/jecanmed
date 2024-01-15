import HeadRainBowBg from "@app/resource/img/rainbow-header-bg.jpg";
import HeadRainBowBgMobile from "@app/resource/img/rainbow-header-bg-mobile.jpg";

export default function HeadRainBow() {
	return (
		<div className="relative">
			<div className="absolute w-full h-full flex flex-col lg:flex-row items-center justify-center text-4xl lg:text-6xl text-primary">
				<div className="my-4">创新<b className="mr-0 lg:mr-10">医疗科技</b></div>
				<div className="my-4">专注<b>乳腺健康</b></div>
			</div>
			<img className="hidden sm:block" src={HeadRainBowBg.src} alt="rainbow-head" />
			<img className="block sm:hidden" src={HeadRainBowBgMobile.src} alt="rainbow-head" />
		</div>
	);
}
