import { InputHTMLAttributes, forwardRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { PasswordInput } from "@/components/ui/password-input";

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  textarea?: boolean;
  rows?: number;
}

export const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps
>(
  (
    {
      label,
      error,
      helperText,
      className,
      required,
      textarea,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const hasError = Boolean(error);

    return (
      <div className="space-y-2">
        <Label
          htmlFor={props.id || props.name}
          className={cn(
            required &&
              'after:content-["*"] after:ml-0.5 after:text-destructive'
          )}
        >
          {label}
        </Label>

        {textarea ? (
          <Textarea
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={ref as any}
            id={props.id || props.name}
            rows={rows}
            className={cn(
              hasError && "border-destructive focus-visible:ring-destructive",
              className
            )}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${props.name}-error`
                : helperText
                ? `${props.name}-helper`
                : undefined
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...(props as any)}
          />
        ) : props.type === "password" ? (
          <PasswordInput
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={ref as any}
            id={props.id || props.name}
            className={cn(
              hasError && "border-destructive focus-visible:ring-destructive",
              className
            )}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${props.name}-error`
                : helperText
                ? `${props.name}-helper`
                : undefined
            }
            {...props}
          />
        ) : (
          <Input
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={ref as any}
            id={props.id || props.name}
            className={cn(
              hasError && "border-destructive focus-visible:ring-destructive",
              className
            )}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${props.name}-error`
                : helperText
                ? `${props.name}-helper`
                : undefined
            }
            {...props}
          />
        )}

        {hasError && (
          <p
            id={`${props.name}-error`}
            className="text-sm font-medium text-destructive"
          >
            {error}
          </p>
        )}

        {!hasError && helperText && (
          <p
            id={`${props.name}-helper`}
            className="text-sm text-muted-foreground"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";
