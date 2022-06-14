import { useAuth } from "../../hooks/auth";
import { Container, DeleteIcon } from "./styles";
import { DDDTypes, PlanTypes } from "../../utils/types";
import { useEffect, useState } from "react";
import { getUserHistoryData, removeItemFromHistory } from "../../services/api";
import calculateTotalWithPlan from "../../utils/calculateTotalWithPlan";

export interface Data {
  id: string;
  origin: DDDTypes;
  destiny: DDDTypes;
  duration: number;
  plan: PlanTypes;
  createdAt: Date;
}

export function History() {
  const { user } = useAuth();

  const [data, setData] = useState<Data[]>([]);

  function deleteItem(id: number) {
    setData((oldState) => oldState?.filter((item, index) => index !== id));
    removeItemFromHistory(id);
  }

  useEffect(() => {
    getUserHistoryData().then((result) => setData(result));
  }, []);

  useEffect(() => {
    getUserHistoryData().then((result) => setData(result));
  }, [user]);

  return (
    <Container>
      <h1>Histórico</h1>

      {!user ? (
        <p>Faça login para visualizar seu histórico de simulações</p>
      ) : data?.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Plano</th>
              <th>Ligação</th>
              <th>Duração</th>
              <th>Total (plano)</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((d, index) => (
              <tr key={index}>
                <td>{d.plan}</td>
                <td>
                  {d.origin} → {d.destiny}
                </td>
                <td>{d.duration} min</td>
                <td>
                  {Number(calculateTotalWithPlan(d).toFixed(2)).toLocaleString(
                    "pt-br",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </td>
                <td>
                  <DeleteIcon
                    onClick={() => {
                      deleteItem(index);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Sem registros</p>
      )}
    </Container>
  );
}
