<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

let store = useStore()
let route = useRoute()

let toggleSubMenu = (e) => {
    // let parent = e.target.dataset.item;
    console.log(e.target)
}

onMounted(() => {
    window.addEventListener('resize', handleWindowResize)
})
// beforeDestroy
onBeforeUnmount(() => {
    window.removeEventListener('resize', handleWindowResize)
})

let handleWindowResize = () => {
    let sidenav = store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen

    if (window.innerWidth <= 1200) {
        if (store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen) {
            store.commit('largeSidebar/toggleSidebarProperties')
        }
    } else {
        if (!store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen) {
            store.commit('largeSidebar/toggleSidebarProperties')
        }
    }
}
</script>
<template>
    <div class="side-content-wrap">
        <div class="side-content-wrap">
            <div
                :class="
                    store.state.largeSidebar.sidebarToggleProperties
                        .isSideNavOpen === true
                        ? 'open'
                        : ''
                "
                class="sidebar-left"
            >
                <perfect-scrollbar>
                    <ul class="navigation-left">
                       <router-link
                            to="/qrcode"
                            tag="li"
                            class="nav-item"
                        >
                            <div class="nav-item-hold">
                                <!-- <i class="i-Upload1 text-3xl"></i> -->
                                <svg  xmlns="http://www.w3.org/2000/svg" width="120" height="30" fill="currentColor" class="bi bi-qr-code" viewBox="0 0 16 16"> <path d="M2 2h2v2H2V2Z"/> <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z"/> <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z"/> <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z"/> <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z"/> </svg>
                                <p>Create Qrcode</p>
                            </div>
                        </router-link>
                        <router-link
                            to="/history"
                            tag="li"
                            class="nav-item"
                        >
                            <div class="nav-item-hold">
                                <i class="i-Receipt text-3xl"></i>
                                <p>History</p>
                            </div>
                        </router-link>
                       
                    </ul>
                </perfect-scrollbar>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav-item.router-link-exact-active {
    @apply text-purple-500;

    &:after {
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        bottom: -15px;
        right: -15px;
        transform: rotate(45deg);
        @apply bg-purple-500;
    }
}
.submenuLi {
    &:hover {
        .submenuli-icon {
            color: #8b5cf6;
        }
    }
    .submenuli-icon {
        color: #9ca3af;
    }
}
.submneu-nested-link {
    padding: 0 !important;
    color: #000 !important;
    &:hover {
        background-color: transparent !important;
        color: #8b5cf6 !important;
    }
}
.side-content-wrap {
    .sidebar-left {
        position: fixed;
        top: 80px;
        left: -120px;
        width: 120px;

        background: #fff;
        box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
            0 1px 4px rgba(0, 0, 0, 0.08);
        z-index: 90;
        transition: all 0.24s ease-in-out;
        &.open {
            left: 0;
            transition: all 0.24s ease-in-out;
        }
        .ps {
            height: calc(100vh - 80px);
        }
        .navigation-left {
            list-style: none;
            text-align: center;
            width: 120px;
            height: 100%;
            margin: 0;
            padding: 0;
            .nav-item,
            .nav-item-single {
                position: relative;
                display: block;
                width: 100%;
                overflow: hidden;
                cursor: pointer;
                &:hover {
                    .nav-item-hold {
                        @apply text-purple-500;
                    }
                    &:after {
                        content: '';
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        bottom: -15px;
                        right: -15px;
                        transform: rotate(45deg);
                        @apply bg-purple-500;
                    }
                }

                &.active {
                    @apply text-purple-500;

                    &:after {
                        content: '';
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        bottom: -15px;
                        right: -15px;
                        transform: rotate(45deg);
                        @apply bg-purple-500;
                    }
                }
                border-bottom: 1px solid #dee2e6;
                .nav-item-hold {
                    display: block;
                    width: 100%;
                    padding: 26px 0;
                    span.material-icons {
                        font-size: 2rem;
                    }
                }
            }
        }
    }
    .sidebar-left-secondary {
        position: fixed;
        top: 80px;
        left: calc(-220px - 20px);
        z-index: 89;
        height: calc(100vh - 80px);
        width: 220px;
        padding: 0.75rem 0;
        transition: all 0.24s ease-in-out;
        background: #fff;

        &.open {
            left: 120px;
            transition: all 0.24s ease-in-out;
        }
        ul.childNav {
            li {
                &.dropdown-sidemenu {
                    display: block;
                    transition: all 0.3s ease-in;
                    &.open {
                        a {
                            .dd-arrow {
                                transform: rotate(90deg);
                                transition: all 0.3s ease-in;
                            }
                        }
                        ul.submenu {
                            display: block;
                            max-height: 1000px;
                            transition: all 0.3s ease-in;
                        }
                    }

                    a {
                        .dd-arrow {
                            margin-left: auto !important;
                            transition: all 0.3s ease-in;
                        }
                    }
                }

                // &.active {
                //     a {
                //         background-color: #f3f4f6;
                //         @apply text-purple-500;
                //     }
                // }
                a {
                    text-transform: capitalize;
                    display: flex;
                    align-items: center;
                    font-size: 13px;
                    cursor: pointer;
                    padding: 12px 24px;
                    transition: 0.15s all ease-in;
                    &:hover {
                        background-color: #f3f4f6;
                        @apply text-purple-500;
                    }
                    &.router-link-active.router-link-exact-active {
                        @apply text-purple-500;
                    }
                }
                ul.submenu {
                    @apply bg-gray-50;
                    display: none;
                    max-height: 0px;
                    transition: all 0.3s ease-in;

                    &.open {
                        display: block;
                        transition: all 0.3s ease-in;
                    }
                    li {
                        a {
                            padding-left: 48px;
                        }
                    }
                }
            }
        }
    }
    .sidebar-overlay {
        display: none;
        position: fixed;
        width: calc(100% - 120px - 220px);
        height: calc(100vh - 80px);
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0);
        z-index: 101;
        cursor: w-resize;
        &.open {
            display: block;
        }
    }
}
</style>
