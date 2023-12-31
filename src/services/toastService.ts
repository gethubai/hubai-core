type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
export type TypeOptions = 'info' | 'success' | 'warning' | 'error' | 'default';
export type ToastPosition =
  | 'top-right'
  | 'top-center'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left';

export type ToastIcon = boolean | string | number | React.ReactNode;

export type DraggableDirection = 'x' | 'y';

export interface ToastContentProps<Data = {}> {
  closeToast?: () => void;
  toastProps: ToastProps;
  data?: Data;
}

export type ToastContent<T = unknown> =
  | React.ReactNode
  | ((props: ToastContentProps<T>) => React.ReactNode);

interface CommonOptions {
  /**
   * Pause the timer when the mouse hover the toast.
   * `Default: true`
   */
  pauseOnHover?: boolean;
  /**
   * Pause the toast when the window loses focus.
   * `Default: true`
   */
  pauseOnFocusLoss?: boolean;
  /**
   * Remove the toast when clicked.
   * `Default: true`
   */
  closeOnClick?: boolean;
  /**
   * Set the delay in ms to close the toast automatically.
   * Use `false` to prevent the toast from closing.
   * `Default: 5000`
   */
  autoClose?: number | false;
  /**
   * Set the default position to use.
   * `One of: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'`
   * `Default: 'top-right'`
   */
  position?: ToastPosition;

  /**
   * An optional style to set for the progress bar.
   */
  progressStyle?: React.CSSProperties;

  /**
   * An optional inline style to apply for the toast content.
   */
  bodyStyle?: React.CSSProperties;
  /**
   * Hide or show the progress bar.
   * `Default: false`
   */
  hideProgressBar?: boolean;

  /**
   * Allow toast to be draggable
   * `Default: true`
   */
  draggable?: boolean;
  /**
   * The percentage of the toast's width it takes for a drag to dismiss a toast
   * `Default: 80`
   */
  draggablePercent?: number;
  /**
   * Specify in which direction should you swipe to dismiss the toast
   * `Default: "x"`
   */
  draggableDirection?: DraggableDirection;
  /**
   * Define the ARIA role for the toast
   * `Default: alert`
   *  https://www.w3.org/WAI/PF/aria/roles
   */
  role?: string;
  /**
   * Set id to handle multiple container
   */
  containerId?: string;
  /**
   * @deprecated
   * ⚠️ Will be removed in the next major release. You can pass a react component with you handler instead.
   *
   * Fired when clicking inside toaster
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * Support right to left display.
   * `Default: false`
   */
  rtl?: boolean;
  /**
   * Used to display a custom icon. Set it to `false` to prevent
   * the icons from being displayed
   */
  icon?: ToastIcon;
}

export interface ToastOptions<Data = {}> extends CommonOptions {
  /**
   * @deprecated
   * ⚠️ Will be removed in the next major release. You can rely on `toast.onChange` instead.
   *
   * Called when toast is mounted.
   */
  onOpen?: <T = {}>(props: T) => void;
  /**
   * @deprecated
   * ⚠️ Will be removed in the next major release. You can rely on `toast.onChange` instead.
   *
   * Called when toast is unmounted.
   */
  onClose?: <T = {}>(props: T) => void;
  /**
   * An optional inline style to apply.
   */
  style?: React.CSSProperties;
  /**
   * Set the toast type.
   * `One of: 'info', 'success', 'warning', 'error', 'default'`
   */
  type?: TypeOptions;
  /**
   * Set a custom `toastId`
   */
  toastId?: string;
  /**
   * Used during update
   */
  updateId?: string;
  /**
   * Set the percentage for the controlled progress bar. `Value must be between 0 and 1.`
   */
  progress?: number | string;
  /**
   * Add a delay in ms before the toast appear.
   */
  delay?: number;
  isLoading?: boolean;
  data?: Data;
}

export interface ToastProps extends ToastOptions {
  isIn: boolean;
  staleId?: string;
  toastId: string;
  key: string;
  closeToast: () => void;
  position: ToastPosition;
  children?: ToastContent;
  draggablePercent: number;
  draggableDirection?: DraggableDirection;
  deleteToast: () => void;
  type: TypeOptions;
  iconOut?: React.ReactNode;
}

/**
 * Options for updating a toast notification, with optional render content.
 */
export interface UpdateOptions<T = unknown> extends Nullable<ToastOptions<T>> {
  /**
   * Used to update a toast.
   * Pass any valid ReactNode(string, number, component)
   */
  render?: ToastContent<T>;
}

/**
 * Parameters for toast notifications related to promises, with optional states.
 */
export interface ToastPromiseParams<
  TData = unknown,
  TError = unknown,
  TPending = unknown
> {
  /** Optional content or options for the pending state. */
  pending?: string | UpdateOptions<TPending>;

  /** Optional content or options for the success state. */
  success?: string | UpdateOptions<TData>;

  /** Optional content or options for the error state. */
  error?: string | UpdateOptions<TError>;
}

/**
 * Service for displaying toast notifications.
 */
export interface IToastService {
  /**
   * Shows a toast notification with content and options.
   * @returns A string representing the toast ID.
   */
  show<TData = unknown>(
    content: ToastContent<TData>,
    options?: ToastOptions<TData>
  ): string;

  /**
   * Shows a toast that will be automatically dismissed when the promise resolves.
   * @returns A promise resolving to the type TData.
   */
  promise<TData = unknown, TError = unknown, TPending = unknown>(
    promise: Promise<TData> | (() => Promise<TData>),
    { pending, error, success }: ToastPromiseParams<TData, TError, TPending>,
    options?: ToastOptions
  ): Promise<TData>;

  /** Shows a success toast notification. */
  success<TData = unknown>(
    content: ToastContent<TData>,
    options?: ToastOptions<TData>
  ): string;

  /** Shows an info toast notification. */
  info<TData = unknown>(
    content: ToastContent<TData>,
    options?: ToastOptions<TData>
  ): string;

  /** Shows a warning toast notification. */
  warn<TData = unknown>(
    content: ToastContent<TData>,
    options?: ToastOptions<TData>
  ): string;

  /** Shows an error toast notification. */
  error<TData = unknown>(
    content: ToastContent<TData>,
    options?: ToastOptions<TData>
  ): string;

  /** Updates an existing toast notification by its ID. */
  update<TData = unknown>(toastId: string, options: UpdateOptions<TData>): void;

  /** Dismisses a toast notification by its ID. */
  dismiss(toastId?: string): void;

  /** Checks if a toast notification is currently active. */
  isActive(toastId: string): boolean;
}
