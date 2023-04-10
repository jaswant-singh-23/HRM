export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return {
      "x-access-token": user.accessToken,
      slug: user.username,
      name: user.name,
      department: user.department,
    };
  } else {
    return {};
  }
}
