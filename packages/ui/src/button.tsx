export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" {...other} style={styles.button}>
      {children}
    </button>
  );
}

Button.displayName = "Button";

const styles = {
  button: {
    color: "red",
    border: "1px solid gray",
    padding: 10,
    borderRadius: 10,
  },
};
