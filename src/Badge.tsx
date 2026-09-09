import type { CSSProperties } from 'react';

export type BadgeVariant = 'default' | 'success' | 'warning';

export type BadgeProps = {
  label: string;
  variant?: BadgeVariant;
  maxLength?: number;
};

const variantStyle: Record<BadgeVariant, CSSProperties> = {
  default: { background: '#eef1f5', color: '#333333' },
  success: { background: '#e3f5e8', color: '#1b6b34' },
  warning: { background: '#fdf0e3', color: '#8a4b00' },
};

export function Badge({ label, variant = 'default', maxLength = 12 }: BadgeProps) {
  return (
    <span
      style={{
        ...variantStyle[variant],
        display: 'inline-block',
        borderRadius: 4,
        padding: '2px 8px',
        fontSize: 12,
      }}
    >
      {truncate(label, maxLength)}
    </span>
  );
}

// ラベルが maxLength を超える場合は省略記号を付けて切り詰める
function truncate(label: string, maxLength: number): string {
  if (label.length <= maxLength) {
    return label;
  }
  return `${label.slice(0, maxLength - 1)}…`;
}