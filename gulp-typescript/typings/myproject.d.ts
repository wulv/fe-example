declare module 'myproject/src/greet' {
	 const a: {
	    sayHello: (name: string, val: Object) => string;
	    a: string;
	};
	export default a;

}
declare module 'myproject/src/main' {
	import a from 'myproject/src/greet';
	export { a };

}
