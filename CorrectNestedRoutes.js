The solution involves correctly defining the paths for nested routes in your React Router configuration.  Ensure that child route paths are relative to their parent route paths.  Avoid absolute paths in nested routes unless explicitly needed for specific routing behavior.

```javascript
//Correct Nesting
<Route path='/users'>
  <Route path='profile' element={<UserProfile/>}/>
  <Route path='profile/:id' element={<UserProfileDetails/>}/>
</Route>

//Or using Route elements
<Route path='/users' element={<UsersLayout/>}>
  <Route path='profile' element={<UserProfile/>}/>
  <Route path='profile/:id' element={<UserProfileDetails/>}/>
</Route>
```

This corrected version ensures that the child route paths are relative to the parent's path `/users`, leading to the correct matching and rendering of the `UserProfile` component at `/users/profile`.  Using the Route element also simplifies the process.