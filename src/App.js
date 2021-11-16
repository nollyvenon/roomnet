import React, { Suspense, lazy } from "react";
import "./App.css";
import Homepage from "./components/pages/homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";




const BrowsListApart = lazy(() =>
  import("./components/pages/browse/Brows-list-apart")
);
const BrowsListRooms = lazy(() =>
  import("./components/pages/browse/Brows-list-rooms")
);
const HowItWorks= lazy(()=>import("./components/pages/howItWorks"));
const Browse = lazy(() => import("./components/pages/browse/Browse"));
const Accessibility =lazy(()=>import("./components/pages/accessibility")) ;
const Terms =lazy(()=>import("./components/pages/terms"));
const NeedRoom1 = lazy(() => import("./components/pages/Needroom/Needroom1"));
const NeedRoom2 = lazy(() => import("./components/pages/Needroom/Needroom2"));
const NeedRoom3 = lazy(() => import("./components/pages/Needroom/Needroom3"));
const NeedRoom4 = lazy(() => import("./components/pages/Needroom/Needroom4"));
const NeedRoom5 = lazy(() => import("./components/pages/Needroom/Needroom5"));
const Login = lazy(() => import("./components/pages/login"));
const Register = lazy(() => import("./components/pages/register"));
const Accounts  = lazy(() => import("./components/pages/accounts"));
const PostAdd = lazy(() => import("./components/pages/PostAdd"));
const PostOptions = lazy(() => import("./components/pages/Postoptions-1"));
const PostOptions2 = lazy(() => import("./components/pages/Postoptions-2"));
const PostRooms1 = lazy(() => import("./components/pages/rooms/PostRooms1"));
const PostRooms2 = lazy(() => import("./components/pages/rooms/PostRooms2"));
const PostRooms3 = lazy(() => import("./components/pages/rooms/PostRooms3"));
const PostRooms4 = lazy(() => import("./components/pages/rooms/PostRooms4"));
const PostRooms4s = lazy(() => import("./components/pages/rooms/PostRooms4s"));
const RoomSuccess = lazy(() => import("./components/pages/rooms/RoomSuccess"));
const UpgradeRoom = lazy(() => import("./components/pages/rooms/UpgradeRoom"));
const UpgradeFlat = lazy(() => import("./components/pages/apartments/UpgradeFlat"));
const SearchResult1 = lazy(() => import("./components/pages/SearchResult1"));
const SearchResult2 = lazy(() => import("./components/pages/SearchResult2"));
const DetailView1 = lazy(() => import("./components/pages/DetailView1"));
const DetailView2 = lazy(() => import("./components/pages/DetailView2"));
const Blogs = lazy(() => import("./components/pages/blogs"));
const BlogDetails  = lazy(() => import("./components/pages/blogsdetails"));
const  Cities = lazy(() => import("./components/pages/cities"));
const Privacy =lazy(()=>import("./components/pages/privacy"))
const FAQ=lazy(()=>import("./components/pages/faq"))
const Aboutus =lazy(()=>import("./components/pages/aboutus"))
const  ContactForm =lazy(()=>import("./components/pages/contactForm"))
const  ContactSuccess =lazy(()=>import("./components/pages/contactsuccess"))
const PostApart1 = lazy(() =>
  import("./components/pages/apartments/PostApart1")
);
const PostApart2 = lazy(() =>
  import("./components/pages/apartments/PostApart2")
);
const PostApart3 = lazy(() =>
  import("./components/pages/apartments/PostApart3")
);
const PostApart4 = lazy(() =>
  import("./components/pages/apartments/PostApart4")
);
const PostApart4s = lazy(() =>
  import("./components/pages/apartments/PostApart4s")
);
const PostApart5 = lazy(() =>
  import("./components/pages/apartments/PostApart5")
);
const ApartSuccess = lazy(() =>
  import("./components/pages/apartments/ApartSuccess")
);

function App() {
  const currentUser = useSelector(({ user }) => user.currentUser);
  return (
    <Router>
      <Suspense
        fallback={
          <div className="container">
            <div className="row my-80 justify-content-center">
              <div className="col-lg-3 col-3 text-center">
                <img
                  className="nav-logo"
                  src="images/logo/logo2.png"
                  alt="logo"
                />
                  <img style={{width:"30%"}}
                  className="nav-logo"
                  src="/images/logo/pulse.gif"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Homepage}  />
           
         
          <Route path="/login">
            {currentUser ? <Homepage /> : <Login />}
          </Route>
          <Route path="/register">
           {currentUser?<Homepage/>: <Register />}
          </Route>
          <Route path="/postadd">
            <PostAdd />
          </Route>
          <Route exact path="/post-options-1">
            <PostOptions />
          </Route>
          <Route exact path="/post-options-2">
            <PostOptions2 />
          </Route>
          <Route exact path="/process-apart-advert1">
            <PostApart1 />
          </Route>
          <Route exact path="/process-apart-advert2">
            <PostApart2 />
          </Route>
          <Route exact path="/process-apart-advert3">
            <PostApart3 />
          </Route>
          <Route exact path="/process-apart-advert4">
            <PostApart4 />
          </Route>
          <Route exact path="/process-apart-advert5">
            <PostApart5 />
          </Route>
          <Route exact path="/process-apart-advert4s">
            <PostApart4s />
          </Route>
          <Route exact path="/process-apart-success">
            <ApartSuccess />
          </Route>

          <Route exact path="/process-rooms-advert1">
            <PostRooms1 />
          </Route>
          <Route exact path="/process-rooms-advert2">
            <PostRooms2 />
          </Route>
          <Route exact path="/process-rooms-advert3">
            <PostRooms3 />
          </Route>
          <Route exact path="/process-rooms-advert4s">
            <PostRooms4s />
          </Route>
          <Route exact path="/process-rooms-advert4">
            <PostRooms4 />
          </Route>
          <Route exact path="/process-rooms-success">
            <RoomSuccess />
          </Route>
          <Route exact path="/Upgrade-room/:id">
            <UpgradeRoom />
          </Route>
          <Route exact path="/Upgrade-apart/:id">
            <UpgradeFlat />
          </Route>
          <Route exact path="/process-needrooms-advert1">
            <NeedRoom1 />
          </Route>
          <Route exact path="/process-needrooms-advert2">
            <NeedRoom2 />
          </Route>
          <Route exact path="/process-needrooms-advert3">
            <NeedRoom3 />
          </Route>
          <Route exact path="/process-needrooms-advert4">
            <NeedRoom4 />
          </Route>
          <Route exact path="/process-needrooms-advert5">
            <NeedRoom5 />
          </Route>
          <Route exact path="/Browse-rooms">
            <Browse />
          </Route>
          <Route exact path="/Browse-rooms-list-apart">
            <BrowsListApart />
          </Route>
          <Route exact path="/Browse-rooms-list-rooms">
            <BrowsListRooms />
          </Route>
          <Route exact path="/SearchResult1">
            <SearchResult1 />
          </Route>
          <Route exact path="/SearchResult2">
            <SearchResult2 />
          </Route>
          <Route exact path="/DetailView1">
            <DetailView1  />
          </Route>
          <Route exact path="/DetailView2">
            <DetailView2  />
          </Route>
          <Route exact path="/Accounts">
            <Accounts   />
          </Route>
          <Route exact path="/Privacy">
            <Privacy  />
          </Route>
          <Route exact path="/FAQ">
            <FAQ  />
          </Route>
          <Route exact path="/aboutus">
            <Aboutus  />
          </Route>
          <Route exact path="/contactForm">
            < ContactForm  />
          </Route>
          <Route exact path="/ContactSuccess">
            <ContactSuccess  />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route exact path="/Accessibility">
            <Accessibility />
          </Route>
          <Route exact path="/terms">
            <Terms />
          </Route>
          <Route exact path="/HowItWorks">
            <HowItWorks />
          </Route>
          <Route  path="/blogDetails/:state" component={BlogDetails }/>
          <Route exact path="/cities" component={Cities}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
