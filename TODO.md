# Implementation Plan - Unicus Website Updates

## Task Summary
1. Make search functionality work for both laptops and phones
2. Build Sign In page with third-party login options
3. Build Create Account page with third-party login options
4. Create course registration flow:
   - If user not logged in → redirect to sign in
   - If user logged in → show course registration form
   - Add "register for someone else" (third party) option

## Files to Modify/Create

### 1. Navbar.jsx - Search Functionality
- [ ] Add search state and functionality
- [ ] Implement search on desktop (expandable search)
- [ ] Implement search on mobile (modal/dropdown)
- [ ] Connect search to filter courses

### 2. SignIn.jsx - Full Sign In Page
- [ ] Create sign in form with email/password
- [ ] Add "remember me" checkbox
- [ ] Add "forgot password" link
- [ ] Add Google sign in button (third party)
- [ ] Add "Create account" link

### 3. Register.jsx - Full Create Account Page
- [ ] Create registration form (name, email, password, confirm password)
- [ ] Add form validation
- [ ] Add Google sign up button (third party)
- [ ] Add "Already have account? Sign in" link

### 4. CourseRegister.jsx - New Course Registration Page
- [ ] Check if user is logged in
- [ ] If not logged in → redirect to sign in with return URL
- [ ] If logged in → show course registration form
- [ ] Add "Register for someone else" toggle
- [ ] Create third party form (for registering someone else)

### 5. AppRoutes.jsx - Update Routes
- [ ] Add route for course registration

### 6. Course Details Pages - Update Register Buttons
- [ ] Update all course detail pages to pass course info in URL

## Implementation Order
1. Update Navbar with search functionality
2. Build SignIn page
3. Build Register (Create Account) page
4. Create CourseRegister page with third-party registration
5. Update AppRoutes
6. Update course detail pages (FrontendDetails as template)
