// // app/profile/edit/page.js
// import { ProfileCoverSection } from '@/components/profile/ProfileCoverSection';
// import { updateProfileCover } from '@/store/slices/profileSlice';
// import { useAppDispatch } from '@/store/hooks';

// export default function ProfileEditPage() {
//   const dispatch = useAppDispatch();

//   const handleCoverUpload = async (file) => {
//     const formData = new FormData();
//     formData.append('cover', file);

//     try {
//       await dispatch(updateProfileCover(formData)).unwrap();
//       // Optional: show success snackbar
//     } catch (err) {
//       console.error('Cover upload failed', err);
//       // show error
//     }
//   };

//   return (
//     <Box sx={{ position: 'relative', pb: 8 }}>
//       {/* Cover sits below header (97px from top) */}
//       <Box sx={{ mt: '97px' }}>
//         <ProfileCoverSection
//           coverUrl="/images/user-cover-123.jpg"
//           onCoverChange={handleCoverUpload}
//         />
//       </Box>

//       {/* Rest of profile form here (personal info, etc.) */}
//     </Box>
//   );
// }