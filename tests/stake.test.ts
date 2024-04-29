import { principalCV } from "@stacks/transactions";
import { describe, expect, it } from "vitest";

const accounts = simnet.getAccounts();
const address1 = accounts.get("wallet_1")!;

/*
  The test below is an example. To learn more, read the testing documentation here:
  https://docs.hiro.so/clarinet/feature-guides/test-contract-with-clarinet-sdk
*/
describe("example tests", () => {
  it("ensures simnet is well initialized", () => {
    expect(simnet.blockHeight).toBeDefined();
  });

  it("check multisig address", () => {
    const r1 = simnet.callReadOnlyFn(
      "sata-vault",
      "is-multisig",
      [principalCV(address1)],
      address1
    );
    expect(r1.result).toBeBool(false);
    const r2 = simnet.callReadOnlyFn(
      "sata-vault",
      "is-multisig",
      [principalCV("SM3R3ECP86C45ARMPYAWQ85H9B4Q4YV27YHB94QZA")],
      address1
    );
    expect(r2.result).toBeBool(true);
  });
});
