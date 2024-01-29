import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const QueryCursor = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.query.cursor || 1;
});

export const QueryLimit = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return parseInt(request.query.limit, 10) || 10;
});
