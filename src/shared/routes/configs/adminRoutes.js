import CourseLayout from "../../../dashboard/admin/courses/CourseLayout";
import { NewsAdmin } from "../../../dashboard/admin/news/NewsAdmin";
import OnlineLibery from "../../../dashboard/shared/layout/OnlineLibery/OnlineLibery";
import LibRaryClass from "../../../dashboard/shared/layout/OnlineLibery/components/LibraryCard/LibraryCard";
import Profile from "../../../dashboard/shared/pages/profile";
import GenericPage from "../../../genericPage/GenericPage";
import Cameras from "../../../dashboard/admin/cameras/Cameras";
import VideoCamer from "../../../dashboard/admin/cameras/VideoCamera";

export const adminRoutes = [
  {
    text: "News",
    path: "/admin/news",
    exact: true,
    visibleInNavbar: true,
    element: <NewsAdmin />,
    icon: "material-symbols:news",
  },
  {
    text: "Courses",
    path: "/admin-courses",
    exact: true,
    visibleInNavbar: true,
    element: <CourseLayout />,
    icon: "material-symbols:play-lesson",
  },
  {
    text: "Cameras",
    path: "/admin/cameras",
    exact: true,
    visibleInNavbar: true,
    element: <Cameras />,
    icon: "bxs:cctv",
  },

  {
    text: "Cameras",
    path: "/admin/cameras/:cameraId",
    exact: true,
    visibleInNavbar: false,
    element: <VideoCamer />,
    icon: "bxs:cctv",
  },
  {
    text: "Team",
    path: "/admin/team",
    exact: true,
    visibleInNavbar: true,
    icon: "ri:team-fill",
    element: <GenericPage />,
  },
  {
    text: 'Online Library',
    path: '/admin/library',
    exact: true,
    visibleInNavbar: true,
    icon: 'ion:book',
    element: <OnlineLibery />,
  },
  {
    text: 'Library Class',
    path: '/admin/library/:libraryId',
    exact: true,
    visibleInNavbar: false,
    icon: 'ion:book',
    element: <LibRaryClass />,
  },
  {
    text: "Schools",
    path: "/admin/schools",
    exact: true,
    visibleInNavbar: true,
    icon: "fa6-solid:school",
    element: <GenericPage />,
  },
  {
    text: "Profile",
    path: "/admin/profile",
    exact: true,
    visibleInNavbar: true,
    icon: "teenyicons:user-solid",
    element: <Profile />,
  },
];
