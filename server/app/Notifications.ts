import Notifier from "ts-notifier";

export namespace Notifications {
  const notifier: Notifier = new Notifier({
    theme: "default",
    position: "top-right"
  });

  export function post(message: String): void {
    notifier.post(message, {
      type: "default",
      delay: "3000",
      animationShowClass: "notifier__item--animation-show",
      animationHideClass: "notifier__item--animation-hide"
    });
  }

  export function error(message: String): void {
    notifier.post(message, {
      type: "error",
      delay: "3000",
      animationShowClass: "notifier__item--animation-show",
      animationHideClass: "notifier__item--animation-hide"
    });
  }
}
