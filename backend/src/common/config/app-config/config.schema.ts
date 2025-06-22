import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const configSchema = z
    .object({
        APP_PORT: z
            .string()
            .default('3010')
            .transform((port) => parseInt(port, 10)),
        AURA_PANEL_URL: z.string(),

        MARZBAN_LEGACY_LINK_ENABLED: z
            .string()
            .default('false')
            .transform((val) => val === 'true'),
        MARZBAN_LEGACY_SECRET_KEY: z.optional(z.string()),
        AURA_API_TOKEN: z.optional(z.string()),

        MARZBAN_LEGACY_SUBSCRIPTION_VALID_FROM: z.optional(z.string()),

        CUSTOM_SUB_PREFIX: z.optional(z.string()),

        CADDY_AUTH_API_TOKEN: z.optional(z.string()),

        META_TITLE: z.string(),
        META_DESCRIPTION: z.string(),
    })
    .superRefine((data, ctx) => {
        if (
            !data.AURA_PANEL_URL.startsWith('http://') &&
            !data.AURA_PANEL_URL.startsWith('https://')
        ) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'AURA_PANEL_URL должен начинаться с http:// или https://',
                path: ['AURA_PANEL_URL'],
            });
        }
        if (data.MARZBAN_LEGACY_LINK_ENABLED === true) {
            if (!data.MARZBAN_LEGACY_SECRET_KEY) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message:
                        'MARZBAN_LEGACY_SECRET_KEY обязателен, когда MARZBAN_LEGACY_LINK_ENABLED установлен в true',
                });
            }
            if (!data.AURA_API_TOKEN) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message:
                        'AURA_API_TOKEN обязателен, когда MARZBAN_LEGACY_LINK_ENABLED установлен в true',
                });
            }
        }
    });

export type ConfigSchema = z.infer<typeof configSchema>;
export class Env extends createZodDto(configSchema) {}
