import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export function Validate(dtoClass: any) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            const [req, res, next] = args;
            const dto = plainToInstance(dtoClass, req.body);

            const errors = await validate(dto);
            if (errors.length > 0) {
                const messages = errors.map((error) => Object.values(error.constraints!)).flat();
                return res.status(400).json({ errors: messages });
            }

            return originalMethod.apply(this, args);
        };
    };
}
