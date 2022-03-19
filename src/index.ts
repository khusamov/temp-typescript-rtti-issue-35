import "reflect-metadata";
import {reflect, ReflectedClass, ReflectedInterfaceRef} from 'typescript-rtti'

export default class IoC {
	static resolve(a: string[]): number {
		return 0
	}
}

IoC.resolve(['text'])