"use client";
import React from "react";
import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";

const toggleMachine = createMachine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: {
      on: { TOGGLE: "active" },
    },
    active: {
      on: { TOGGLE: "inactive" },
    },
  },
});
export default function Machine() {
  const [state, send] = useMachine(toggleMachine);
  return (
    <div>
      <button
        onClick={() =>
          send({
            type: "TOGGLE",
          })
        }
      >
        {state.value === "inactive"
          ? "Click to activate"
          : "Active! Click to deactivate"}
      </button>
    </div>
  );
}
