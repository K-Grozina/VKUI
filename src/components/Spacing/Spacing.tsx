import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import styles from "./Spacing.module.css";

export interface SpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Высота спэйсинга
   */
  size?: number;
  children?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Spacing
 */
export const Spacing = ({
  size = 8,
  style: styleProp,
  className,
  ...restProps
}: SpacingProps) => {
  const style = {
    height: size,
    ...styleProp,
  };

  return (
    <div
      {...restProps}
      aria-hidden="true"
      className={classNamesString(className, styles["Spacing"])}
      style={style}
    />
  );
};
