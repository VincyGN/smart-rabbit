<template>
  <nav class="app-navbar">
      <div class="comtainer">
          <ul>
              <template v-if="profile.token">
              <li><a href="javascript"><i class="iconfont icon-user"></i>{{profile.account}}</a></li>
              <li><a href="javascript">退出登录</a></li>
              </template>
              <template v-else>
              <li><a href="javascript">请先登录</a></li>
              <li><a href="javascript">免费注册</a></li>
              </template>
              <li><a href="javascript">我的订单</a></li>
              <li><a href="javascript">会员中心</a></li>
              <li><a href="javascript">帮助中心</a></li>
              <li><a href="javascript">关于我们</a></li>
              <li><a href="javascript"><i class="iconfont icon-phone">手机版</i></a></li>
          </ul>
      </div>
  </nav>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'AppNavBar',
  setup () {
    const store = useStore()
    // 获取用户登录信息，控制导航登录切换
    // 使用vuex中的state需要使用computed计算属性，否则不是响应式的
    const profile = computed(() => {
      return store.state.user.profile
    })
    return {
      profile
    }
  }

}
</script>

<style lang='less' scoped>
.app-navbar{
    background: #333;
    ul{
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;
        li{
            a{
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;
                i{
                    font-size: 14px;
                    margin-right: 2px;
                }
                &:hover{
                    color: @xtxColor;
                }
            }
            // ~ 选择器可以拿到该元素后面的所有兄弟元素
        ~ li{
            a{
                border-left: 2px solid #666;
            }
        }
        }
    }
}
</style>
