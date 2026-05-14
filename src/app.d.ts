/// <reference types="lucia" />

declare global {
  namespace App {
    interface Locals {
      auth: import("lucia").AuthRequest;
    }
  }
}

export {};