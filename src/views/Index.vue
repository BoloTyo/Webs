<template>
  <div class="layout">
    <Layout>
      <!-- <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"> -->
      <Menu mode="horizontal" :theme="theme1" active-name="1">
        <div class="layout-logo"><Icon type="logo-windows" size="40" /></div>
        <div class="layout-nav">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-stats" />
              常用
            </template>
            <MenuGroup title="日常检查">
              <MenuItem name="3-1"><router-link to="/page1">Page1</router-link></MenuItem>
              <MenuItem name="3-2"><router-link to="/page2">Page2</router-link></MenuItem>
            </MenuGroup>
          </Submenu>

          <MenuItem name="2">
            <Icon type="ios-paper" />
            备用
          </MenuItem>
        </div>
        <div class="layout-user"><Icon type="ios-contact" size="30" /></div>
      </Menu>
      <!-- </Header> -->
      <Content :style="{ padding: '5px 5px' }">
        <!-- <Breadcrumb :style="{ margin: '20px 0' }">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb> -->
        <Card>
          <div style="min-height: 200px">
            <router-view></router-view>
          </div>
        </Card>
      </Content>
      <!-- <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer> -->
    </Layout>
  </div>
</template>
<script>
// import IndexMain from "./IndexComponent/IndexMain";

export default {
  name: "Index",
  data() {
    return {
      theme1: "light",
    };
  },
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  /* background: #5b6270; */
  border-radius: 3px;
  float: left;
  position: relative;
  top: 7px;
  left: 20px;
  margin: auto;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-user {
  width: 100px;
  height: 30px;
  /* background: #5b6270; */
  border-radius: 3px;
  float: right;
  position: relative;
  /* top: 10px; */
  right: 20px;
  margin: auto;
}
.layout-footer-center {
  text-align: center;
}
</style>
