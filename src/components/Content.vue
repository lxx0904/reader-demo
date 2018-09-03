<template>
	<transition name="silde-right">
		<div class="content">
			<div class="content-wrapper" v-if="bookAvailable">
				<div class="content-wrapper-item" v-for="(item, index) in navigation.toc" :key="index" @click="jumpTo(item.href)">
					<span class="text">{{item.label}}</span>
				</div>
			</div>
			<div class="empty" v-else>加载中...</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: '',
		data() {
			return {};
		},
		props: {
			ifShowContent: Boolean,
			navigation: Object,
			bookAvailable: Boolean
		},
		methods: {
			jumpTo(href) {
				this.$emit('jumpTo', href);
			}
		}
	};
</script>

<style scoped lang='scss'>
	@import '../assets/styles/global';
	.content {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 102;
		display: flex;
		width: 80%;
		height: 100%;
		padding: 0 px2rem(20);
		background-color: white;
		box-sizing: border-box;
		overflow: hide;
		color: #333333;
		font-size: px2rem(16);
		.content-wrapper {
			height: 100%;
			width: 100%;
			overflow-y: auto;
			.content-wrapper-item {
				padding: px2rem(20) 0;
			}
		}
		.empty {
			@include center;
		}
	}
</style>