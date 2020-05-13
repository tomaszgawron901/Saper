function LogMethod(target: object, propKey: string, descriptor: PropertyDescriptor): PropertyDescriptor{
    console.log("METHOD DECORATOR:", propKey, "evalueated.");

    const method = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(propKey + " CALLED!, Args", args)
        return method.apply(this, args);;
    }

    return descriptor;
}

function logProperty(target: any, propertyName: string) {
    console.log(propertyName, target);
}

export {LogMethod, logProperty};