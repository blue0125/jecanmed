import more from "@app/resource/img/more.png";

interface Prop {
  href: string,
  className?: string,
  text?: string,
  icon?: string,
}

export default function More({ href, className }: Prop) {
  return (
    <div className={className}>
      <a href={href} className="flex items-center text-2xl lg:text-3xl font-semibold">
        <img src={more.src} alt="More" className="w-10 lg:w-14 mr-4 lg:mr-8"/>
        more
      </a>
    </div>
  );
}
