export default function HeadBase({
	children,
	props,
}: {
	children: JSX.Element;
	props,
}) {
	const { title } = props;
	return (
		<>
			<head>
				<title>{title}</title>
				{children}
			</head>
		</>
	);
}
