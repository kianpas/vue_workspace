export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    //파이어베이스는 포스트로 입력하면 아이디 만듬
    const response = await fetch(
      `https://vue-http-demo-926b8-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      { method: 'POST', body: JSON.stringify(newRequest) }
    );

    const responseData = await response.json();

    if (!response.ok) {
      //error
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    //파이어베이스 name이 아이디
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    context.commit('addRequest', newRequest);
  },

  async loadRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(
      `https://vue-http-demo-926b8-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      //error
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  },
};
