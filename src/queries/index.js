import gql from 'graphql-tag';

export const FIND_USER = gql`
  query findUser($id: String!) {
    findUser(_id: $id) {
      name
      achievement
      activityLog {
        activityId
        name
        leader {
          userId
        }
        days {
          date
          startTime
          endTime
          place {
            name
          }
          room
        }
        participants {
          userId
          name
          comment
        }
        status
      }
    }
  }
`;

export const MODIFY_USER = gql`
  mutation modifyUser($id: String!, $name: String!) {
    modifyUser(userId: $id, name: $name) {
      name
    }
  }
`;

export const GET_PLACE = gql`
  query findPlace($id: String!) {
    findPlace(_id: $id) {
      name
      rooms {
        name
        equipments
        description
        thumbnail
      }
      location {
        address
      }
      businessHour
      bookLink
      contact
    }
  }
`;

export const GET_EDIT = gql`
  {
    edit @client {
      editing
      id
      name
      total
      date
      startTime
      endTime
      placeId
      room
      content
      type
    }
  }
`;

export const START_EDIT = gql`
  mutation {
    startEdit @client {
      editing
    }
  }
`;

export const CREATE_EDIT = gql`
  mutation createEdit(
    $id: String
    $name: String
    $total: Int
    $date: String
    $startTime: String
    $endTime: String
    $placeId: String
    $room: String
    $content: String
    $type: String
  ) {
    createEdit
      @client(
        id: $id
        name: $name
        total: $total
        date: $date
        startTime: $startTime
        endTime: $endTime
        placeId: $placeId
        room: $room
        content: $content
        type: $type
      ) {
      editing
      id
      name
      total
      date
      startTime
      endTime
      placeId
      room
      content
      type
    }
  }
`;

export const MODIFY_EDIT = gql`
  mutation modifyEdit(
    $name: String
    $total: Int
    $date: String
    $startTime: String
    $endTime: String
    $placeId: String
    $room: String
    $content: String
    $type: String
  ) {
    modifyEdit
      @client(
        name: $name
        total: $total
        date: $date
        startTime: $startTime
        endTime: $endTime
        placeId: $placeId
        room: $room
        content: $content
        type: $type
      ) {
      editing
      id
      name
      total
      date
      startTime
      endTime
      placeId
      room
      content
      type
    }
  }
`;