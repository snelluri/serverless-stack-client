export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-uploads-nelluri"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://eyjw8u3vri.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_LUUKbFnba",
    APP_CLIENT_ID: "2lrbto9m7e3l87c3d5gnpf6em0",
    IDENTITY_POOL_ID: "us-west-2:58b7ac18-d33f-46ac-8c5f-a725c192e28b"
  }
};
