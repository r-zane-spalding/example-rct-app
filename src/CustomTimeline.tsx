import React, { Component } from "react";
import moment, { Moment } from "moment";

import Timeline, { TimelineGroup, TimelineGroupBase, TimelineItem, TimelineItemBase } from "@babylimon/react-calendar-timeline"

import generateFakeData from "./generate-fake-data";

var keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
  groupLabelKey: "title"
};

type CustomTimelineProps = {
}

type State = {
    groups:TimelineGroupBase[],
    items:any,//TimelineItemBase<number>[],
    defaultTimeStart: any,//Moment,
    defaultTimeEnd: any,//Moment
}

export default class CustomTimeline extends React.Component {

  state: State
  constructor(props: any) {
    super(props);

    const { groups, items } = generateFakeData(150);
    const defaultTimeStart = moment().startOf("day").toDate();
    const defaultTimeEnd = moment().startOf("day").add(1, "day").toDate();

    this.state = {
      groups,
      items,
      defaultTimeStart,
      defaultTimeEnd
    };
  }

  render() {
    const { groups, items, defaultTimeStart, defaultTimeEnd } = this.state;

    return (
      <Timeline
        groups={groups}
        items={items}
        keys={keys}
        sidebarContent={<div>Above The Left</div>}
        itemTouchSendsClick={false}
        stackItems
        itemHeightRatio={0.75}
        canMove={false}
        canResize={false}
        defaultTimeStart={defaultTimeStart}
        defaultTimeEnd={defaultTimeEnd}
      >
      </Timeline>
    );
  }
}
