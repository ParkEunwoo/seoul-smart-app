import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Activity from './Activity';

export default function ActivityLogs({ activityLog }) {
  return (
    <FlatList
      data={activityLog}
      keyExtractor={({ id }) => id}
      renderItem={({
        item: {
          id,
          name,
          isLeader,
          date,
          startTime,
          endTime,
          place,
          room,
          status,
          participants,
        },
      }) => (
        <Activity
          key={id}
          name={name}
          isLeader={isLeader}
          date={date}
          startTime={startTime}
          endTime={endTime}
          place={place}
          room={room}
          status={status}
          participants={participants}
        />
      )}
    />
  );
}

ActivityLogs.defaultProps = {
  activityLog: [],
};

ActivityLogs.propTypes = {
  activityLog: PropTypes.arrayOf(PropTypes.object),
};