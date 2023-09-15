// import React, { useState } from 'react';
// import Cookies from 'js-cookie';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Replace this with an actual API endpoint for user registration
//     const response = await fetch('/api/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.status === 200) {
//       const data = await response.json();

//       // Assuming the API returns a JWT token upon successful registration
//       if (data.token) {
//         // Store the JWT token in a cookie with an expiration time
//         Cookies.set('jwtToken', data.token, { expires: 7 }); // Cookie expires in 7 days

//         // Redirect to a protected route or perform other actions as needed
//         window.location.href = '/home'; // Redirect to the dashboard
//       }
//     } else {
//       // Handle registration failure (e.g., show an error message)
//       console.error('Registration failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <button type="submit">Signup</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;
