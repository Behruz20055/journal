import About from "../../../user/about/About";
import { Contact } from "../../../user/contact";
import CoursesPage from "../../../user/courses";
import { Home } from "../../../user/home";
import Journal from "../../../user/journal/Journal";
import JournalTahririyat from "../../../user/journal/Journalpage4";
import JournalEthics from "../../../user/journal/JournalPage5";
import JournalSend from "../../../user/journal/JournalPage3";
import JournalAll from "../../../user/journal/JournalPage2";
import LibraryPage from "../../../user/library/LibraryPage";
import { NewsPage } from "../../../user/news";
import Error404Page from "../../pages/Error404Page";
import Articles from "../../../user/articles/Articles";
import ArticleDetails from "../../../user/articles/ArticleDetails";

export const mainRoutes = [
  {
    text: "Asosiy",
    path: "/",
    exact: true,
    visibleInNavbar: true,
    element: <Home />,
  },
  {
    text: "Tahririyat",
    path: "/editorial",
    exact: true,
    visibleInNavbar: true,
    element: <JournalTahririyat />,
  },
  {
    text: "Nashrlar ",
    path: "/journal-all",
    exact: true,
    visibleInNavbar: true,
    element: <JournalAll />,
  },
  {
    text: "Yangiliklar",
    path: "/news",
    exact: true,
    visibleInNavbar: true,
    element: <NewsPage />,
  },
  {
    text: "Etika ",
    path: "/ethics",
    exact: true,
    visibleInNavbar: true,
    element: <JournalEthics />,
  },
  {
    text: "Mualliflarga",
    path: "/journal-send",
    exact: true,
    visibleInNavbar: true,
    element: <JournalSend />,
  },
  {
    text: "404",
    path: "*",
    visibleInNavbar: false,
    exact: true,
    element: <Error404Page />,
  },
  {
    text: "Maqolalar",
    path: "/magazine/:id",
    exact: true,
    visibleInNavbar: true,
    element: <Articles />,
  },
  {
    path: "/articles/:id",
    element: <ArticleDetails />,
  },
];
