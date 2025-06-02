import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Account() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("user-account");
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [showProductSubmenu, setShowProductSubmenu] = useState(false);

  // Function to handle sidebar hover
  const expandSidebar = () => {
    setSidebarExpanded(true);
  };

  // Function to collapse sidebar
  const collapseSidebar = () => {
    setSidebarExpanded(false);
    setShowProductSubmenu(false);
  };

  // Function to toggle product submenu
  const toggleProductSubmenu = () => {
    setShowProductSubmenu(!showProductSubmenu);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Navigate back to the login page
    router.push("/");
  };

  // Render the sidebar menu
  const renderSidebar = () => (
    <View
      style={[styles.sidebar, sidebarExpanded && styles.sidebarExpanded]}
      onMouseEnter={expandSidebar}
      onMouseLeave={collapseSidebar}
    >
      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Image
            source={require("../assets/PathSmart.png")}
            style={styles.logoImage}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.menuItem, activeTab === "map" && styles.activeMenuItem]}
        onPress={() => {
          setActiveTab("map");
          router.push("/admin_interface");
        }}
      >
        <Image
          source={require("../assets/icons/map.png")}
          style={styles.logoImage}
        />
        {sidebarExpanded && <Text style={styles.menuText}>Map</Text>}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.menuItem,
          activeTab === "users" && styles.activeMenuItem,
        ]}
        onPress={() => {
          setActiveTab("users");
          router.push("/account_creation");
        }}
      >
        <Image
          source={require("../assets/icons/account-creation.png")}
          style={styles.logoImage}
        />
        {sidebarExpanded && (
          <Text style={styles.menuText}>Account Creation</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.menuItem,
          activeTab === "dashboard" && styles.activeMenuItem,
        ]}
        onPress={toggleProductSubmenu}
      >
        <Image
          source={require("../assets/icons/PnS.png")}
          style={styles.logoImage}
        />
        {sidebarExpanded && (
          <View style={styles.productServicesContainer}>
            <Text style={styles.menuText}>Product/Services</Text>
            <Image
              source={require("../assets/icons/dropdown-arrow.png")}
              style={[
                styles.arrowIcon,
                {
                  transform: [
                    { rotate: showProductSubmenu ? "0deg" : "270deg" },
                  ],
                },
              ]}
            />
          </View>
        )}
      </TouchableOpacity>
      {sidebarExpanded && showProductSubmenu && (
        <View style={styles.submenu}>
          <TouchableOpacity
            style={styles.submenuItem}
            onPress={() => {
              setActiveTab("quality-guide");
              router.push("/quality_guide");
            }}
          >
            <Text style={styles.submenuText}>Quality Guide</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submenuItem}
            onPress={() => {
              setActiveTab("listing");
              router.push("/listing");
            }}
          >
            <Text style={styles.submenuText}>Listing Creation</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        style={[
          styles.menuItem,
          activeTab === "settings" && styles.activeMenuItem,
        ]}
        onPress={() => {
          setActiveTab("settings");
          router.push("/stalls");
        }}
      >
        <Image
          source={require("../assets/icons/stall.png")}
          style={styles.logoImage}
        />
        {sidebarExpanded && <Text style={styles.menuText}>Stalls</Text>}
      </TouchableOpacity>
      <View style={styles.sidebarBottom}>
        <TouchableOpacity
          style={[
            styles.menuItem,
            activeTab === "user-account" && styles.activeMenuItem,
          ]}
          onPress={() => {
            setActiveTab("user-account");
            router.push("/account");
          }}
        >
          <Image
            source={require("../assets/icons/user-account.png")}
            style={styles.logoImage}
          />
          {sidebarExpanded && <Text style={styles.menuText}>Account</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <Image
            source={require("../assets/icons/logout.png")}
            style={styles.logoImage}
          />
          {sidebarExpanded && <Text style={styles.menuText}>Logout</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderSidebar()}
      <View style={styles.content}>
        <Text style={styles.title}>Account</Text>

        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              {/* You can use an actual image here if available */}
            </View>
            <View style={styles.editIconContainer}>
              <Pressable style={styles.editButton}>
                <Text style={styles.editIcon}>✏️</Text>
              </Pressable>
            </View>
          </View>

          <Text style={styles.name}>Joel Petallio</Text>
          <Text style={styles.role}>Administrator</Text>

          <TouchableOpacity style={styles.phoneLink}>
            <Text style={styles.phoneText}>Add your phone number</Text>
          </TouchableOpacity>

          <View style={styles.credentialsContainer}>
            <View style={styles.credentialRow}>
              <Text style={styles.credentialLabel}>username:</Text>
              <Text style={styles.credentialValue}>joelpetallio</Text>
            </View>

            <View style={styles.credentialRow}>
              <Text style={styles.credentialLabel}>password:</Text>
              <Text style={styles.credentialValue}>joelpetallio</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
  },
  content: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
    flex: 1,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#D3D3D3", // Light gray placeholder
    justifyContent: "center",
    alignItems: "center",
  },
  editIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#4CAF50", // Green color for edit button
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  editButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  editIcon: {
    fontSize: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: "#757575",
    marginBottom: 16,
  },
  phoneLink: {
    marginBottom: 40,
  },
  phoneText: {
    color: "#757575",
    textDecorationLine: "underline",
  },
  credentialsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  credentialRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  credentialLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  credentialValue: {
    fontSize: 16,
  },
  sidebar: {
    width: 60,
    backgroundColor: "#1976D2",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    transition: "width 0.3s",
  },
  sidebarExpanded: {
    width: 220,
    alignItems: "flex-start",
  },
  logoContainer: {
    marginBottom: 40,
    width: "100%",
  },
  logoBox: {
    width: 36,
    height: 36,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  menuItem: {
    width: "100%",
    height: 44,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  activeMenuItem: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  menuText: {
    color: "white",
    marginLeft: 15,
    fontSize: 16,
  },
  productServicesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  arrowIcon: {
    width: 12,
    height: 12,
    marginLeft: 10,
    tintColor: "white",
  },
  submenu: {
    width: "100%",
    backgroundColor: "#1e88e5",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 15,
  },
  submenuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  submenuText: {
    color: "white",
    fontSize: 14,
  },
  sidebarBottom: {
    position: "absolute",
    bottom: 130,
    width: "100%",
    alignItems: "center",
  },
  // Add any additional styles here
});
