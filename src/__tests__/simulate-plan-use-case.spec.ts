import calculateTotalWithoutPlan from "../utils/calculateTotalWithoutPlan";
import calculateTotalWithPlan from "../utils/calculateTotalWithPlan";
import { DataParams } from "../utils/types";

describe("Simulate plan values", () => {
  const data1: DataParams = {
    origin: "11",
    destiny: "16",
    duration: 20,
    plan: "FALE_MAIS_30",
  };

  const data2: DataParams = {
    origin: "11",
    destiny: "17",
    duration: 80,
    plan: "FALE_MAIS_60",
  };

  const data3: DataParams = {
    origin: "18",
    destiny: "11",
    duration: 200,
    plan: "FALE_MAIS_120",
  };

  const data4: DataParams = {
    origin: "18",
    destiny: "17",
    duration: 100,
    plan: "FALE_MAIS_30",
  };

  it("1.1 - Calculate total value without plan", () => {
    const result = calculateTotalWithoutPlan(data1);
    expect(result).toBe(38);
  });

  it("1.2 - Calculate total value with plan Fale Mais 30", () => {
    const result = calculateTotalWithPlan(data1);
    expect(result).toBe(0);
  });

  it("2.1 - Calculate total value without plan", () => {
    const result = calculateTotalWithoutPlan(data2);
    expect(result).toBe(136);
  });

  it("2.2 - Calculate total value with plan Fale Mais 60", () => {
    const result = Number(calculateTotalWithPlan(data2).toFixed(1));
    expect(result).toBe(37.4);
  });

  it("3.1 - Calculate total value without plan", () => {
    const result = calculateTotalWithoutPlan(data3);
    expect(result).toBe(380);
  });

  it("3.2 - Calculate total value with plan Fale Mais 120", () => {
    const result = Number(calculateTotalWithPlan(data3).toFixed(1));
    expect(result).toBe(167.2);
  });

  it("4.1 - Return 0 in case of plan not supported", () => {
    const result = calculateTotalWithoutPlan(data4);
    expect(result).toBe(0);
  });

  it("4.2 - Return 0 in case of plan not supported", () => {
    const result = calculateTotalWithPlan(data4);
    expect(result).toBe(0);
  });
});
