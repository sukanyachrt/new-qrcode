<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue'
import { Switch } from '@headlessui/vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useStore } from 'vuex'

let store = useStore()

const sideBarToggle = () => {
    let sidenav = store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen

    if (sidenav == false) {
        store.commit('largeSidebar/toggleSidebarProperties')
    } else {
        store.commit('largeSidebar/toggleSidebarProperties')
    }
}
</script>

<template>
    <div class="header-wrapper flex bg-white justify-between px-4">
        <div class="flex items-center">
            <div class="logo flex justify-center">
                <img
                    class="fill-current"
                    width="100"
                    height="80"
                    fill="none"
                    src="/src/assets/qrcode-01.png"
                    alt=""
                />    
            </div>
        </div>
        <div class="flex items-center">
            <!-- profile-dropdown  -->
            <Menu as="div" class="relative inline-block text-left">
                <div>
                    <MenuButton
                        class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium"
                    >
                        <img
                            class="avatar rounded-full"
                            src="/images/faces/1.jpg"
                            alt=""
                        />
                    </MenuButton>
                </div>
                <MenuItems
                    class="absolute right-0 w-44 mt-2 overflow-hidden origin-top-right bg-white rounded-md custom-box-shadow focus:outline-none"
                >
                    <div class="">
                        <div
                            class="px-4 py-3 text-sm text-gray-900 dark:text-white"
                        >
                            <div>ชื่อผู้เข่าใช้งาน</div>
                            <div class="font-medium truncate">
                                อีเมล @ gmail.com
                            </div>
                        </div>
                        <MenuItem v-slot="{ active }">
                            <button
                                :class="[
                                    active
                                        ? 'bg-purple-500 text-white'
                                        : 'text-gray-900',
                                    'group flex  items-center w-full px-4 py-2 text-sm',
                                ]"
                            >
                                Sign Out
                            </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-wrapper {
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 100;
    box-shadow: 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%);
}
.mega-menu {
    width: 1200px;
}
ul.links {
    column-count: 2;
    li {
        margin-bottom: 8px;
    }
}
</style>
