import classNames from "classnames";

interface Prop {
  heading: string,
  className?: string,
  explain?: string,
}

export default function Headline({ heading, className, explain }: Prop) {
  const wrapperClass = 'pt-6 lg:pt-12 pb-8 lg:pb-16 relative';
  const wrapperClassLast = classNames(wrapperClass, className);

  return (
    <section className={wrapperClassLast}>
      <h2 className="text-2xl lg:text-4xl font-semibold before:content-[''] before:block before:absolute before:w-9 lg:before:w-20 before:h-2 before:rounded-full before:bg-regular before:-top-0">{heading}<span className="ml-4">{explain}</span></h2>
    </section>
  );
}
