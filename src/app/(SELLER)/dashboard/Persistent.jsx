"use client";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@mui/material";
import { HomeIcon } from "lucide-react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonRemoveOutlinedIcon from "@mui/icons-material/PersonRemoveOutlined";
import Link from "next/link";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import { getStoreSettings } from "@/lib/serverActions";
import { useEffect } from "react";
import { logout } from "@/lib/serverActions"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    position: "relative",
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Persistent() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [storeName, setStoreName] = useState("");
  const [logo, setLogo] = useState([]);
  useEffect(() => {
    const fetchAccountSettings = async () => {
      try {
        const data = await getStoreSettings();
        console.log("Data received:", data);

        if (data && data.store) {
          setStoreName(data.store.storeName);
          setLogo(`${data.store.storeImages}`);
        } else {
          console.error("No valid data found.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAccountSettings();
  });

  return (
    <div className="bg-gray-50 h-20">
        
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            backgroundColor: "#f9fafb",
            p: 1,
          }}
          color=""
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1 }}
              component="div"
            >
              <div className="flex gap-3">
                <Avatar src={logo || "/default-avatar.jpg"} />
                <h1 className="mt-1 text-3xl text-indigo-950"> {storeName}</h1>
              </div>
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
             
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="">
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                  backgroundColor: "#f9fafb  ",
                width: drawerWidth,
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            <DrawerHeader className="border-b border-dotted h-20">
              <div className="flex justify-between my-auto text-black mt-3 pt-1 mx-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="bi bi-shop-window my-auto hover:text-indigo-700 "
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                 
              </div>
            </DrawerHeader>

            <Divider />
            <List>
              <Link href="/dashboard" className="no-underline">
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      textDecoration: "none",
                      textAlign: "right",
                      "&:hover": { color: "#9500ae" },
                    }}
                  >
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="الرئيسية"
                      className=" text-xl text-gray-700 no-underline"
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link href="/dashboard/order" className="no-underline">
                <ListItem disablePadding>
                  <ListItemButton
                    sx={{
                      textDecoration: "none",
                      textAlign: "right",
                      "&:hover": {
                        color: "#9500ae",
                      },
                    }}
                  >
                    <ListItemIcon>
                      <ShoppingCartCheckoutIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary=" الطلبات"
                      className=" text-xl text-gray-700 no-underline"
                    />
                  </ListItemButton>
                </ListItem>
              </Link>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="h-8 hover:bg-slate-100">
                    <ListItem disablePadding className="w-full">
                      <ListItemButton
                        sx={{
                          textAlign: "right",
                          "&:hover": {
                            color: "#9500ae",
                          },
                        }}
                      >
                        <ListItemIcon>
                          <StorefrontOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary=" المنتجات"
                          className="text-xl text-gray-700 no-underline"
                        />
                      </ListItemButton>
                    </ListItem>
                  </AccordionTrigger>
                  <AccordionContent className=" h-10 ">
                    <Link href="/dashboard/all-products" className="no-underline">
                      <ListItem disablePadding>
                        <ListItemButton
                          sx={{
                            textDecoration: "none",
                            textAlign: "right",
                            "&:hover": {
                              color: "#9500ae",
                            },
                          }}
                        >
                          <ListItemText
                            primary=" كل المنتجات"
                            className="  text-lg pr-16 text-gray-700 no-underline"
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </AccordionContent>
                  <AccordionContent className=" h-10 ">
                    <Link href="/dashboard/add-product" className="no-underline">
                      <ListItem disablePadding>
                        <ListItemButton
                          sx={{
                            textDecoration: "none",
                            textAlign: "right",
                            "&:hover": {
                              color: "#9500ae",
                            },
                          }}
                        >
                          <ListItemText
                            primary=" إضافة منتج"
                            className="text-lg pr-16 text-gray-700 no-underline"
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="h-8 hover:bg-slate-100 no-underline">
                    <ListItem disablePadding className="w-full">
                      <ListItemButton
                        sx={{
                          textDecoration: "none",
                          textAlign: "right",
                          "&:hover": {
                            color: "#9500ae",
                          },
                        }}
                      >
                        <ListItemIcon>
                          <SettingsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary=" الإعدادات"
                          className=" text-xl text-gray-700 no-underline"
                        />
                      </ListItemButton>
                    </ListItem>
                  </AccordionTrigger>
                  <AccordionContent className=" h-10 ">
                    <Link href="/dashboard/store-settings" className="no-underline">
                      <ListItem disablePadding>
                        <ListItemButton
                          sx={{
                            textDecoration: "none",
                            textAlign: "right",
                            "&:hover": {
                              color: "#9500ae",
                            },
                          }}
                        >
                          <ListItemText
                            primary="  إعدادات المتجر"
                            className="text-lg pr-16 text-gray-700 no-underline"
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </AccordionContent>
                  <AccordionContent className=" h-10 ">
                    <Link href="/dashboard/account-settings" className="no-underline">
                      <ListItem disablePadding>
                        <ListItemButton
                          sx={{
                            textDecoration: "none",
                            textAlign: "right",
                            "&:hover": {
                              color: "#9500ae",
                            },
                          }}
                        >
                          <ListItemText
                            primary="  إعدادات الحساب"
                            className="  text-lg pr-16  text-gray-700 no-underline"
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </AccordionContent>
                  <AccordionContent className=" h-10 ">
                    <Link href="/dashboard/change-password" className="no-underline">
                      <ListItem disablePadding>
                        <ListItemButton
                          sx={{
                            textDecoration: "none",
                            textAlign: "right",
                            "&:hover": {
                              color: "#9500ae",
                            },
                          }}
                        >
                          <ListItemText
                            primary="   تغيير كلمة السر"
                            className=" text-lg pr-16  text-gray-700 no-underline"
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </AccordionContent>
                  <AccordionContent className=" h-10 ">
                    <Link href="/dashboard/delete-account " className="no-underline">
                      <ListItem disablePadding>
                        <ListItemButton
                          sx={{
                            textDecoration: "none",
                            textAlign: "right",
                            "&:hover": {
                              color: "#9500ae",
                            },
                          }}
                        >
                          <ListItemText
                            primary=" حذف الحساب"
                            className="  text-lg pr-16 text-gray-700 no-underline"
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="h-8 hover:bg-slate-100">
                    <ListItem disablePadding className="w-full">
                      <ListItemButton
                        sx={{
                          textAlign: "right",
                          "&:hover": {
                            color: "#9500ae",
                          },
                        }}
                      >
                        <ListItemIcon>
                          <HelpOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary=" مساعدة"
                          className="text-xl text-gray-700 no-underline"
                        />
                      </ListItemButton>
                    </ListItem>
                  </AccordionTrigger>
                  <AccordionContent className=" h-10 ">
                    <Link href={"/help"} className="no-underline">
                      <ListItem disablePadding className=" nounderline">
                        <ListItemButton
                          sx={{
                            textAlign: "right",
                            "&:hover": { color: "#9500ae" },
                          }}
                        >
                          <ListItemText
                            primary="مركز المساعدة"
                            className=" text-lg pr-16 text-gray-700"
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </AccordionContent>
                  <AccordionContent className=" h-10 ">
                    <Link href={"/reportProblem"} className="no-underline">
                      <ListItem disablePadding className=" nounderline">
                        <ListItemButton
                          sx={{
                            textAlign: "right",
                            "&:hover": { color: "#9500ae" },
                          }}
                        >
                          <ListItemText
                            primary="الإبلاغ عن مشكلة"
                            className=" text-lg pr-16  text-gray-700"
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <AlertDialog>
                <AlertDialogTrigger className="w-full">
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon style={{ color: "#d50000" }}>
                        <LogoutIcon />
                      </ListItemIcon>
                      <ListItemText
                        style={{ textAlign: "right", color: "#d50000" }}
                        primary="تسجيل الخروج"
                        className=" text-xl text-red-600 "
                      />
                    </ListItemButton>
                  </ListItem>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      هل أنت متأكد أنك تريد تسجيل الخروج؟
                    </AlertDialogTitle>
                  </AlertDialogHeader>
               
                  <AlertDialogFooter className={'mx-auto'}>
                    <AlertDialogCancel className={'my-auto'} >إلغاء</AlertDialogCancel>
                    <Link href="/login" onClick={()=> logout()} className="no-underline">
                      <AlertDialogAction className=" bg-red-500 my-auto mr-3 hover:bg-red-600">
                        تسجيل الخروج
                      </AlertDialogAction>
                    </Link>
                  </AlertDialogFooter>
              
                </AlertDialogContent>
              </AlertDialog>
            </List>
          </Drawer>
        </div>
      </Box>
    </div>
  );
}
