import { createMachine, createActor } from "xstate";

export const promiseMachine = createMachine({
  id: "promise",
  initial: "pending",
  states: {
    pending: {
      on: {
        RESOLVE: {
          target: "resolved",
        },
        REJECT: {
          target: "rejected",
        },
      },
    },
    resolved: {
      type: "final",
    },
    rejected: {
      type: "final",
    },
  },
});

const promiseService = createActor(promiseMachine);

promiseService.start();

promiseService.send({
  type: "RESOLVE",
});
