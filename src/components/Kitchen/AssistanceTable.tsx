"use client";

import { useGetAssistanceRequests } from "@/services/queries";
import ChoiceTable from "./ChoiceTable";
import { useDeclineAssistanceRequest, useApproveAssistanceRequest } from "@/services/queries";
import { AssistanceRequest } from "@/types/assistance";

const AssitanceTable = () => {
  const queryResult = useGetAssistanceRequests();
  const mutateRight = useApproveAssistanceRequest();
  const mutateLeft = useDeclineAssistanceRequest();

  function getSession(data: AssistanceRequest) {
    return data.requested;
  }

  function getStatus(data: AssistanceRequest) {
    return data.assist;
  }

  if (queryResult.isPending) return <div>Loading</div>

  return (
    <ChoiceTable 
      data={queryResult.data as AssistanceRequest[]}
      getSession={getSession}
      getStatus={getStatus}
      leftStatus={false}
      leftHeader="Request"
      rightHeader="Assist"
      leftChoice="Decline"
      rightChoice="Approve"
      finalChoice="Done"
      mutateRight={mutateRight}
      mutateLeft={mutateLeft}
      leftEmptyText="No assistance request."
      rightEmptyText="No table assisting."
    />
  );
};

export default AssitanceTable;
