<template>
  <div class="transcript-box relative flex w-full flex-col text-sm">
    <div class="content-box flex flex-1 flex-col overflow-hidden">
      <!--pc 端操作栏-->
      <div
        v-if="isDesktop"
        class="flex min-h-[3.75rem] w-full flex-row items-center border-b border-solid border-borderColor px-4 py-3"
      >
        <div class="left-box flex min-w-64 flex-1 items-center overflow-hidden">
          <div
            v-if="!isShare && canEdit"
            class="icon-wrap me-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg text-lg text-black hover:bg-fontHover"
          >
            <el-icon @click="handleBack" class="!text-black">
              <ArrowLeft />
            </el-icon>
          </div>
          <div v-if="canEdit" class="file-wrap flex-1 overflow-hidden">
            <rename-file
              :isShare="isShare"
              :fileBaseInfo="fileBaseInfo"
              v-model:fileName="fileName"
              v-model:isEditFile="isEditFile"
            />
            <div class="file-upload-time text-sm text-fontColor">
              {{ fileUploadTime && getTime(fileUploadTime) }}
            </div>
          </div>
        </div>
        <div
          class="right-box relative ms-20 flex min-h-8 min-w-[10rem]"
          :class="[
            {
              'pointer-events-none bg-white opacity-30': fileBaseInfo.isEmptyParagraph
            }
          ]"
        >
          <!--非分享 -->
          <template v-if="!isShare">
            <!--编辑模式-->
            <AnimateWrap>
              <div v-if="isEditRightTranscript" class="absolute bottom-[50%] right-0 flex translate-y-[50%]">
                <el-button
                  text
                  :title="t('TranscriptionPage.undo')"
                  class="!ms-[1.625rem] h-8 !bg-transparent !p-0"
                  :disabled="!canUndo"
                  @click="undoOperation"
                >
                  <span class="iconfont icon-zuochexiao text-base"></span>
                </el-button>
                <el-button
                  text
                  :title="t('TranscriptionPage.redo')"
                  class="!ms-[1.625rem] h-8 !bg-transparent !p-0"
                  :disabled="!canRedo"
                  @click="redoOperation"
                >
                  <span class="iconfont icon-youchexiao text-base"></span>
                </el-button>
                <el-button
                  text
                  class="h-8 !bg-mainColor-600 hover:!bg-hoverColor-deepen"
                  @click="handleSaveRightTranscript(() => (lastSentenceId = ''))"
                >
                  <span class="iconfont icon-baocun1 me-2 text-base"></span>
                  <span class="!text-black"> {{ t("TranscriptionPage.save") }}</span>
                </el-button>
              </div>
            </AnimateWrap>
            <AnimateWrap>
              <div v-if="!isEditRightTranscript">
                <el-button text class="h-8" :disabled="langId !== ''" @click="handleEditRightTranscript(fileBaseInfo)">
                  <span class="iconfont icon-bianji me-2 text-base"></span>
                  {{ t("TranscriptionPage.edit") }}
                </el-button>
                <!-- 翻译-->
                <translate-multiple
                  v-model:langId="langId"
                  :recentLanguageKeys="recentLanguageKeys"
                  @choose="handleTranslateLangChoose"
                >
                </translate-multiple>
                <!-- 说话人-->
                <el-button
                  v-if="fileBaseInfo.diarizeEnabled"
                  text
                  :bg="isShowSpeaker"
                  class="h-8"
                  @click="handleShowSpeaker"
                >
                  <span class="iconfont icon-jiangyanzhe me-2 text-base"></span>
                  {{ t("TranscriptionPage.showSpeaker") }}
                </el-button>
                <!--时间戳-->
                <time-stamp-pc v-model:isShowTimestamp="isShowTimestamp"></time-stamp-pc>

                <el-button v-if="showShareBtn" text class="h-8" @click="handleShare">
                  <span class="iconfont icon-fenxiang me-2 text-base"></span>
                  {{ t("TranscriptionPage.share") }}
                </el-button>
                <el-button text bg class="export-btn h-8" @click="handleDownload">
                  <span class="iconfont icon-xiazai me-2 text-base !text-[#6F4CF0]"></span>
                  {{ t("TranscriptionPage.export") }}
                </el-button>
              </div>
            </AnimateWrap>
          </template>
          <template v-else>
            <!--分享-->
            <div class="flex h-8 min-w-20 items-center justify-center">
              "{{ shareName }}" {{ t("TranscriptionPage.shared") }}
            </div>
            <el-button text class="ms-2 h-8" @click="handleDownload">
              <span class="iconfont icon-xiazai me-2 text-base"></span>
              {{ t("TranscriptionPage.export") }}
            </el-button>
          </template>
        </div>
      </div>
      <!--手机端操作栏-->
      <div
        v-else
        class="relative flex min-h-12 w-full shrink-0 flex-row items-center overflow-hidden border-b border-solid border-borderColor px-4"
        :class="{
          'flex-row-reverse': isEditRightTranscript,
          'justify-end': isShare
        }"
      >
        <template v-if="!isShare">
          <AnimateWrap>
            <div v-if="isEditRightTranscript" class="absolute bottom-[50%] right-0 flex translate-y-[50%]">
              <el-button
                text
                :title="t('TranscriptionPage.undo')"
                class="h-8 !bg-transparent !p-0"
                :disabled="!canUndo"
                @click="undoOperation"
              >
                <span class="iconfont icon-zuochexiao text-base"></span>
              </el-button>
              <el-button
                text
                :title="t('TranscriptionPage.redo')"
                class="!ms-[1.625rem] h-8 !bg-transparent !p-0"
                :disabled="!canRedo"
                @click="redoOperation"
              >
                <span class="iconfont icon-youchexiao text-base"></span>
              </el-button>
              <el-button text class="h-8" @click="handleSaveRightTranscript(() => (lastSentenceId = ''))">
                <span class="iconfont icon-baocun1 me-2 text-base"></span>
              </el-button>
            </div>
          </AnimateWrap>
          <AnimateWrap>
            <div v-if="!isEditRightTranscript" class="relative flex flex-1 justify-between text-fontColor">
              <div v-if="canEdit" class="icon-wrap flex cursor-pointer items-center text-lg text-black">
                <el-icon @click="handleBack">
                  <ArrowLeft />
                </el-icon>
              </div>
              <div
                class="flex flex-1 flex-row-reverse"
                :class="[
                  {
                    'pointer-events-none bg-white opacity-30': fileBaseInfo.isEmptyParagraph
                  }
                ]"
              >
                <!--更多-->
                <MoreBtnMobile
                  :fileBaseInfo="fileBaseInfo"
                  :langId="langId"
                  :showShareBtn="showShareBtn"
                  v-model:isShowSpeaker="isShowSpeaker"
                  v-model:isShowTimestamp="isShowTimestamp"
                  @share="handleShare"
                >
                  <div class="ms-5 h-8 leading-8">
                    <span class="iconfont icon-suolve me-2 inline-block rotate-90 text-base"></span>
                  </div>
                </MoreBtnMobile>
                <!--下载-->
                <div class="ms-5 h-8 leading-8" @click="handleDownload">
                  <span class="iconfont icon-xiazai me-2 text-base"></span>
                </div>
                <!-- 翻译-->
                <translate-multiple
                  v-model:langId="langId"
                  :recentLanguageKeys="recentLanguageKeys"
                  @choose="handleTranslateLangChoose"
                >
                </translate-multiple>
                <!--编辑转录按钮-->
                <div
                  class="ms-5 h-8 leading-8"
                  :class="[langId !== '' ? 'pointer-events-none opacity-50' : '']"
                  @click="handleEditRightTranscript(fileBaseInfo)"
                >
                  <span class="iconfont icon-bianji me-2 text-base"></span>
                </div>
              </div>
            </div>
          </AnimateWrap>
        </template>
        <div
          v-else
          class="flex flex-1 items-center"
          :class="[
            {
              'pointer-events-none bg-white opacity-30': fileBaseInfo.isEmptyParagraph
            }
          ]"
        >
          <div class="flex min-h-8 flex-1 items-center justify-start py-2">
            <span
              class="flex break-words"
              style="text-decoration: none; text-decoration-line: none; -webkit-touch-callout: none"
            >
              "{{ shareName }}" {{ t("TranscriptionPage.shared") }}
            </span>
          </div>
          <el-button text class="ms-2 h-8" @click="handleDownload">
            <span class="iconfont icon-xiazai me-2 text-base"></span>
            {{ t("TranscriptionPage.export") }}
          </el-button>
        </div>
      </div>
      <!--中间播放区域-->
      <div
        v-if="!fileBaseInfo.hasError"
        ref="container"
        class="draggable-panels grid-container flex-1 overflow-hidden rounded-xl bg-white px-4 py-[1.125rem]"
        :class="[!displayVideo ? '!py-0' : '']"
        :style="gridStyle"
      >
        <!-- 左侧面板 -->
        <div
          v-show="displayVideo && isVideo"
          ref="leftPanel"
          :style="{
            ...leftPanelStyle,
            '--device-pixel-ratio-diff': devicePixelRatioDiff > 1 ? devicePixelRatioDiff * 3 + 'rem' : '0rem'
          }"
          class="flex overflow-hidden bg-white"
        >
          <div id="mse" class="tm-xg-video rounded-lg"></div>
        </div>

        <!-- 拖拽条 - 仅桌面端显示 -->
        <div
          v-show="displayVideo && isVideo"
          ref="resizer"
          :style="resizerStyle"
          class="drag-handle z-10 mx-2 bg-mainColor-900"
          @mousedown="handleDragStart"
          :class="{ dragging: isDragging, 'drag-disabled': !dragEnabled }"
          @mouseenter="enableDrag"
          @mouseleave="disableDrag"
        ></div>
        <!-- 右侧面板 -->
        <div
          ref="rightPanel"
          :dir="transcriptDirection"
          class="relative flex flex-col overflow-hidden px-4"
          :style="{
            ...rightPanelStyle,
            ...{
              '--upgrade-visible-height': upgradeVisibleHeight ? +upgradeVisibleHeight + 1.5 + 'rem' : 0
            }
          }"
          :class="[
            !displayVideo ? 'pe-10 ps-4' : '',
            langId ? 'show-lang-box' : '',
            isShowSpeaker ? 'show-speaker-box' : '',
            !isDesktop ? 'is-mobile !px-0' : '',
            upgradeVisibleHeight ? 'upgrade-visible' : '',
            !langId && !displayVideo ? 'mx-auto max-w-[67.5rem] !pe-0 !ps-0' : ''
          ]"
          id="right-btn"
        >
          <UpTips></UpTips>
          <span
            v-if="langId"
            :class="[
              !isDesktop ? 'flex h-[1.75rem] w-full justify-end' : 'absolute top-4',
              transcriptDirection === 'rtl' ? 'left-16' : 'right-16',
              'z-[1000]'
            ]"
            :title="t('TranscriptionPage.closeTrans')"
          >
            <span class="iconfont icon-shanchu h-4 w-4 cursor-pointer text-base text-black" @click="langId = ''"></span>
          </span>
          <div class="file-wrap overflow-hidden" v-if="!isDesktop && canEdit">
            <rename-file
              :isShare="isShare"
              :fileBaseInfo="fileBaseInfo"
              v-model:fileName="fileName"
              v-model:isEditFile="isEditFile"
            />
            <div class="file-upload-time text-sm text-fontColor">
              {{ fileUploadTime && getTime(fileUploadTime) }}
            </div>
          </div>
          <DynamicScroller
            v-if="transcriptData && !fileBaseInfo.isEmptyParagraph"
            ref="dynamicScroller"
            :items="transcriptData.paragraphs"
            :min-item-size="56"
            keyField="pid"
            skipHover
            class="transcript-container flex flex-1 overflow-y-auto overscroll-y-none"
            @scroll-end="handleScrollEnd"
          >
            <template #default="{ item, index, active }">
              <DynamicScrollerItem
                :item="item"
                :active="active"
                :size-dependencies="[item.sentences]"
                :data-index="index"
                :data-active="active"
                class="dy-item"
              >
                <div
                  :key="item.pk || item.pid"
                  :data-active="active"
                  :data-pid="item.pid"
                  class="virtual-item-wrap relative flex bg-white"
                  :class="[isDesktop ? 'flex-row pb-4' : 'flex-col']"
                >
                  <div
                    v-show="isShowSpeaker || (!isDesktop && isShowTimestamp === 1)"
                    class="left-speaker flex-shrink-0 items-end"
                    :class="[
                      !isDesktop ? 'my-2.5 flex flex-1' : 'pt-5',
                      isShowTimestamp !== 1 && isDesktop ? '!pt-0' : ''
                    ]"
                  >
                    <!-- 一个段落对应一个说话人 -->
                    <div
                      v-if="fileBaseInfo.diarizeEnabled"
                      v-show="isShowSpeaker"
                      ref="speakerBtnRef"
                      v-click-outside="handleOutsideClick"
                      :class="{
                        'is-shared': isShare,
                        'hover:bg-fontHover': !isShare && isDesktop && canEdit,
                        'flex w-[9rem] justify-end px-2.5 py-[0.3125rem]': isDesktop,
                        'inline-block max-w-72 overflow-hidden': !isDesktop,
                        'cursor-pointer': !isShare && canEdit,
                        'pointer-events-none': isShare || !canEdit
                      }"
                      class="speaker-container me-2.5 inline-flex items-center rounded-[0.5rem] transition-colors"
                      @click="handleSpeakerPopoverShow(item.speakerId, item.pid, isShare, $event)"
                    >
                      <span class="edit-icon iconfont icon-bianji me-1" v-if="isDesktop && canEdit"></span>
                      <span
                        class="truncate text-base font-medium leading-[1.375rem] text-fontColor"
                        :class="[isDesktop ? 'text-right' : '']"
                        :title="item.speaker"
                      >
                        {{ item.speaker }}
                      </span>
                    </div>
                    <div
                      v-if="!isDesktop"
                      v-show="isShowTimestamp === 1"
                      class="h-5 text-sm font-normal text-fontColor"
                    >
                      <span>{{ formatSecondsFromMs(item.start_time) }}</span>
                    </div>
                    <el-popover
                      v-if="speakerPopoverVisible && selectedPid === item.pid"
                      ref="speakerPopoverRef"
                      placement="bottom"
                      :visible="speakerPopoverVisible"
                      :virtual-ref="speakerBtnRef"
                      virtual-triggering
                      :width="speakerPopWidth"
                      popper-class="pop-iAHFsY2 !p-0"
                    >
                      <div v-loading="speakerSaveLoading && !editSpeakerDialogVisible">
                        <!-- 说话人选择内容 -->

                        <el-scrollbar
                          max-height="14rem"
                          class="pt-2"
                          ref="scrollbarRef"
                          @mouseenter="isInSpeakerList = true"
                          @mouseleave="isInSpeakerList = false"
                        >
                          <div
                            v-for="(speaker, index) in uniqueSpeakers"
                            :key="speaker.id"
                            ref="speakerItemsRef"
                            class="speaker-item flex h-8 cursor-pointer items-center justify-between bg-white px-5"
                            :data-speaker-id="speaker.id"
                            :class="{
                              'is-active text-[#F5F7FA]': selectedSpeakerId === speaker.id,
                              'hover-selected !bg-hoverColor-normal': hoverSelectedSpeakerId === speaker.id,
                              'hover:bg-hoverColor-normal': isDesktop && !hoverSelectedSpeakerId
                            }"
                            @mouseenter="handleSpeakerItemMouseEnter(speaker.id, index)"
                          >
                            <div
                              class="flex h-full flex-1 items-center overflow-hidden"
                              @click="selectSpeaker(speaker.id, index)"
                            >
                              <span class="iconfont icon-jiangyanzhe me-2 flex-shrink-0 text-sm text-fontColor"></span>
                              <span
                                class="inline-block truncate text-black"
                                :class="{
                                  '!text-mainColor-900': selectedSpeakerId === speaker.id
                                }"
                              >
                                {{ speaker.name }}
                              </span>
                            </div>
                            <div class="speaker-actions flex items-center">
                              <span
                                v-if="selectedSpeakerId === speaker.id"
                                class="iconfont icon-duihao me-2 text-xs !text-mainColor-900"
                              ></span>
                              <span
                                class="iconfont icon-bianji edit-speaker-icon text-xs opacity-0"
                                @click.stop="openEditSpeakerDialog(speaker)"
                              ></span>
                            </div>
                          </div>
                        </el-scrollbar>

                        <div class="mt-3 pb-2.5 ps-5">
                          <el-button
                            plain
                            class="!rounded-lg !border-borderColor !px-3 !text-black"
                            @click="openEditSpeakerDialog()"
                          >
                            <span> + {{ t("TranscriptionPage.addNew") }} </span>
                          </el-button>
                        </div>
                        <el-popover
                          v-if="isDesktop && hasDuplicateSpeakers && !speakerSaveLoading"
                          ref="popoverDupRef"
                          :virtual-ref="speakerItemRef"
                          :placement="isDesktop ? 'right' : 'bottom'"
                          :visible="speakerItemPopVisible"
                          virtual-triggering
                          :width="isDesktop ? '18rem' : '23rem'"
                          :show-arrow="false"
                          :offset="-2"
                          popper-class="pop-iAHFsY2 !p-0"
                        >
                          <div
                            class="flex flex-col px-2 py-2 text-black"
                            @mouseenter="isInSpeakerPopover = true"
                            @mouseleave="isInSpeakerPopover = false"
                          >
                            <div
                              class="cursor-pointer rounded-lg p-2 hover:bg-hoverColor-normal"
                              v-for="type in chooseTypes"
                              :key="type.id"
                              :title="type.label"
                              @click="handleChooseType(type.id)"
                            >
                              {{ type.label }}
                            </div>
                          </div>
                        </el-popover>
                        <el-drawer
                          v-else-if="!isDesktop && hasDuplicateSpeakers && !speakerSaveLoading"
                          class="rounded-t-xl"
                          size="auto"
                          :with-header="false"
                          :show-close="false"
                          v-model="speakerItemPopVisible"
                          direction="btt"
                        >
                          <div class="flex flex-col text-black">
                            <div
                              class="cursor-pointer rounded-lg p-3 text-center"
                              v-for="type in chooseTypes"
                              :key="type.id"
                              :title="type.label"
                              @click="handleChooseType(type.id)"
                            >
                              {{ type.label }}
                            </div>
                          </div>
                        </el-drawer>
                      </div>
                    </el-popover>
                  </div>
                  <div
                    class="right-content transcript-content-wrap flex flex-1 flex-col"
                    :class="[isDesktop ? (isShowSpeaker ? 'pe-4' : 'px-4') : '']"
                  >
                    <!--      说话人的开始时间       -->
                    <div v-if="isDesktop" v-show="isShowTimestamp === 1" class="h-5 text-sm font-normal text-fontColor">
                      <span>{{ formatSecondsFromMs(item.start_time) }}</span>
                    </div>
                    <div class="grid w-full flex-1" :class="[isDesktop && langId ? 'grid-cols-2' : 'grid-cols-1']">
                      <!-- 段落  桌面端或者 移动端且未选择翻译其他语言-->
                      <div
                        v-if="isDesktop || (!isDesktop && !langId)"
                        :data-pid="item.pid"
                        class="content-span-parent-node paragraph-container whitespace-normal break-words text-lg tracking-[0.35px] outline-none"
                      >
                        <!-- 句子容器 - 支持容器级别的contenteditable -->
                        <span
                          class="sentence-container select-text whitespace-break-spaces outline-none"
                          :contenteditable="isEditRightTranscript"
                          :data-pid="item.pid"
                          :class="{
                            'editable-container': isEditRightTranscript
                          }"
                          @input="handleRealTimeInput"
                          @compositionstart="handleCompositionStart"
                          @compositionend="handleCompositionEnd"
                          @paste="handlePaste"
                        >
                          <span
                            v-for="(sentence, sentIndex) in item.sentences"
                            :key="sentence.sid"
                            class="sentence-wrapper cursor-pointer whitespace-break-spaces break-words border-b border-solid border-transparent text-lg !leading-[2.125rem] tracking-[0.35px] outline-none"
                            :data-sid="sentence.sid"
                            :data-sentence-index="sentIndex"
                            :data-pid="item.pid"
                            :class="{
                              'content-editable !rounded-none py-1 !text-black': isActiveEditingSentence(sentence.sid)
                            }"
                          >
                            <span
                              v-if="!isEditRightTranscript && isShowTimestamp === 2"
                              class="h-5 cursor-auto text-sm font-normal text-fontColor"
                              >({{ formatSecondsFromMs(sentence.start_time, true) }})&nbsp;</span
                            >
                            <!-- 统一的句子显示/编辑容器 -->
                            <span
                              v-for="(word, wordIndex) in sentence.contents"
                              :key="word.cid"
                              class="word-span whitespace-break-spaces break-words rounded-[0.25rem] py-1 !leading-[2.125rem] tracking-[0.35px] duration-200"
                              :class="[
                                {
                                  '!cursor-text': isEditRightTranscript
                                },
                                {
                                  'md:transition-colors md:hover:bg-hoverColor-deepen md:hover:text-black':
                                    !isEditRightTranscript
                                },
                                isWordActive(word) &&
                                (!isEditRightTranscript ||
                                  (isEditRightTranscript &&
                                    !isActiveEditingSentence(sentence.sid) &&
                                    (lastSentenceId === '' || lastSentenceId !== sentence.sid)))
                                  ? 'bg-hoverColor-deepen text-black md:transition-colors'
                                  : ''
                              ]"
                              :data-word-index="wordIndex"
                              :data-sent-index="sentIndex"
                              :data-content-index="wordIndex"
                              :data-cid="word.cid"
                              :data-leaf="true"
                              :data-pid="item.pid"
                              :data-sid="sentence.sid"
                              @dblclick="
                                !isEditRightTranscript &&
                                handleWordDblClick(word, isEditRightTranscript ? sentence.sid : '')
                              "
                              @click="handleWordClick(word, isEditRightTranscript ? sentence.sid : '')"
                              >{{ word.content }}
                            </span>
                          </span>
                        </span>
                      </div>
                      <div
                        v-if="langId && !isShare"
                        :dir="translateDirection"
                        :class="[!isDesktop ? '!px-0' : '']"
                        class="other-lange-wrap whitespace-normal break-words px-16 text-lg !leading-8"
                      >
                        <span>
                          {{ item.translateContent }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="!isShare && item.isLast && fileBaseInfo.isHalfHour && !isEditRightTranscript"
                    class="half-wrap absolute bottom-0 left-0 h-[5.25rem] w-full"
                  ></div>
                </div>
                <!--  最后一项 升级提示-->
                <div
                  :key="item.pid + 'upgrade'"
                  ref="upgradeTipRef"
                  v-if="!isShare && item.isLast && fileBaseInfo.isHalfHour"
                  class="mx-auto flex w-full flex-col items-center justify-center rounded-lg bg-mainColor-600 p-[2.25rem]"
                >
                  <div class="mb-2.5 text-center text-[1.375rem] font-medium leading-[1.875rem] text-black">
                    {{ t("TranscriptionPage.outLimit") }}
                  </div>
                  <div class="mb-[1.5rem] flex flex-col whitespace-pre-wrap text-lg">
                    <span class="text-center"> {{ t("TranscriptionPage.outLimitTip1") }}</span>
                    <span class="text-center"> {{ t("TranscriptionPage.outLimitTip2") }}</span>
                  </div>
                  <div
                    @click="handleJumpUpgrade"
                    class="mt-2 flex min-h-11 min-w-[16.25rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-[1.375rem] bg-mainColor-900 px-7 text-[1.375rem] font-medium text-white duration-75 ease-linear hover:bg-opacity-80 hover:text-opacity-80 sm:mt-0 md:min-h-[3.25rem] md:rounded-[1.625rem]"
                  >
                    {{ t("RegisterDialog.signUpNow") }}
                  </div>
                </div>
              </DynamicScrollerItem>
            </template>
          </DynamicScroller>
          <div class="flex h-full w-full flex-col items-center justify-center" v-else>
            <NuxtImg
              src="/assets/images/silent.png"
              alt="silent"
              loading="eager"
              class="mb-3 w-16"
              fit="contain"
            ></NuxtImg>
            <span class="text-base">{{ t("TranscriptionPage.silentTip") }}</span>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-1 items-center justify-center overflow-hidden text-lg">
        {{ t("TranscriptionPage.errorTips") }}
      </div>
      <div
        :class="[isDesktop ? 'h-[4.5rem] border-t border-solid border-borderColor' : 'h-[3.5rem]']"
        class="audio-container sticky bottom-0 mx-auto flex w-full items-center justify-center"
      >
        <div class="audio-wrap relative flex h-full w-full max-w-[67.5rem] items-center justify-center">
          <div id="audioID" class="hidden"></div>
          <div class="flex h-full w-full items-center">
            <div
              v-if="!isVideo"
              id="audio-crt"
              class="xgplayer xgplayer-tm flex justify-center"
              :class="{ 'is-mobile': !isDesktop }"
            ></div>
            <div v-else class="flex w-full justify-center">
              <VideoControls v-if="playerVideo" :player="playerVideo" />
            </div>
            <div
              v-if="isDesktop && isVideo"
              :class="[langId ? 'cursor-not-allowed opacity-50' : '']"
              class="display-video-wrap relative mt-0.5 flex !h-9 !w-9 items-center justify-center rounded-lg hover:bg-fontHover"
            >
              <el-tooltip
                :show-arrow="false"
                effect="customized"
                popper-class="popper-class-ZZMG2X2I"
                :content="isShowVideo ? t('TranscriptionPage.hideVideo') : t('TranscriptionPage.showVideo')"
              >
                <span
                  class="iconfont cursor-pointer text-[1.375rem]"
                  :class="[
                    isShowVideo ? 'icon-shipinbofang' : 'icon-guanbishipin',
                    langId ? 'pointer-events-none' : ''
                  ]"
                  @click="handelToggleVideo"
                ></span>
              </el-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 编辑说话人弹窗 -->
    <el-dialog
      v-model="editSpeakerDialogVisible"
      :title="
        ![undefined, null, ''].includes(editingSpeakerId)
          ? t('TranscriptionPage.edit')
          : t('TranscriptionPage.createANewSpeaker')
      "
      width="22rem"
      header-class="edit-speaker-header-class"
      body-class="edit-speaker-body-class relative"
      footer-class="edit-speaker-footer-class"
      align-center
      :show-close="true"
      append-to-body
      :close-on-click-modal="false"
      class="edit-speaker-dialog common-dialog-S5NaD2 popover-textarea"
      @open="() => dialogOpen('.edit-speaker-dialog', confirmEditSpeaker)"
      @close="() => dialogClose('.edit-speaker-dialog')"
    >
      <el-input
        class="sys-input"
        v-model="editingSpeakerName"
        :placeholder="t('TranscriptionPage.speakerName')"
        maxlength="80"
        :rows="3"
        @keydown.enter.native="(e) => e.preventDefault()"
        type="textarea"
      ></el-input>
      <div
        class="speaker-duplicate absolute -bottom-6 mt-1 text-subColor-normal"
        v-if="isSpeakerDuplicate && !speakerSaveLoading && editSpeakerDialogVisible"
      >
        {{ t("TranscriptionPage.speakerDuplicate") }}
      </div>

      <template #footer>
        <div class="dialog-footer">
          <el-button
            class="!rounded-lg !border-borderColor !px-4 !text-black hover:!border-transparent hover:!bg-borderColor"
            @click="editSpeakerDialogVisible = false"
          >
            {{ t("TranscriptionPage.cancel") }}</el-button
          >
          <el-button
            type="primary"
            :loading="speakerSaveLoading"
            class="sys-btn !rounded-lg !px-4"
            @click="confirmEditSpeaker"
          >
            {{
              ![undefined, null, ""].includes(editingSpeakerId)
                ? t("TranscriptionPage.confirm")
                : t("TranscriptionPage.addSpeaker")
            }}
          </el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 分享 -->
    <share-dialog :fileBaseInfo="fileBaseInfo" ref="shareDialogRef" />
    <transcript-detail-export
      :taskId="fileBaseInfo.taskId"
      :translateLang="langCode"
      :tableData="[fileBaseInfo]"
      :fileId="fileBaseInfo.fileId"
      :isShowTimestamp="isShowTimestamp"
      :isShowSpeaker="isShowSpeaker"
      v-model="exportDialogVisible"
    />
    <register-dialog ref="registerDialogRef" @export="exportDialogVisible = true"></register-dialog>
  </div>
</template>

<script setup>
import VideoControls from "./VideoControls.client.vue";
import { languageMap } from "~/components/langChoose/langFlag.js";
defineOptions({
  name: "TranscriptDetail"
});
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";
import { ArrowLeft } from "@element-plus/icons-vue";
import { ClickOutside as vClickOutside } from "element-plus";
import { onMounted, onUnmounted, watch } from "vue";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import { sleep } from "~/utils/tools";
import { languageTransMap } from "~/components/langChoose/langFlag.js";
// 导入拆分后的 hooks
import useTranscript from "./hook/useTranscript.js";
import usePlayer from "./hook/usePlayer.js";
import useLayout from "./hook/useLayout.js";
import useTranscriptEditV1 from "./hook/useTranscriptEditV1.js";
import useSpeaker from "./hook/useSpeaker.js";
import useFileInfo from "./hook/useFileInfo.js";
import useTranslation from "./hook/useTranslation.js";
import useKeyEvent from "./hook/keyEvent.js";
import { Events, Sniffer } from "xgplayer";
import ShareDialog from "./childrenComp/shareDialog";
import AnimateWrap from "./childrenComp/animateWrap";
import { getMIMETypeFromURL } from "~/utils/tools";
import TimeStampPc from "./childrenComp/topOperate/timeStamp/pc.vue";
import TranslateMultiple from "./childrenComp/topOperate/translateMultiple";
import MoreBtnMobile from "./childrenComp/topOperate/moreBtn/mobile.vue";
import RenameFile from "./childrenComp/topOperate/renameFile/index.vue";
import UpTips from "./childrenComp/upTips.vue";
const props = defineProps({
  speakers: {
    type: Array,
    default: () => []
  },
  fileBaseInfo: {
    type: Object,
    default: () => ({})
  },
  transcriptInfo: {
    type: Object,
    default: () => ({})
  },
  isShare: {
    type: Boolean,
    default: false
  },
  shareName: {
    type: String,
    default: ""
  },
  showShareBtn: {
    type: Boolean,
    default: true
  },
  canEdit: {
    type: Boolean,
    default: true
  }
});
const emit = defineEmits(["translate", "saveConfig", "updateSpeakers"]);
useHead({
  meta: () => [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, viewport-fit=cover"
    }
  ]
});
const { isFreeUser } = storeToRefs(useSubscriptionStore());
const { getTime } = useTime();
const { t, locale, getLocaleMessage } = useI18n();

let { transcriptInfo: transcriptData, speakers } = toRefs(props);
// 转写数据相关
const { getParagraphText } = useTranscript();

const { langId, handleTranslateLangChoose, upgradeTipRef, upgradeVisibleHeight, handleScrollEnd } = useTranslation(
  emit,
  props
);
// 布局相关
const {
  container,
  isDragging,
  isDesktop,
  dragEnabled,
  isShowVideo,
  displayVideo,
  gridStyle,
  enableDrag,
  disableDrag,
  handleDragStart,
  handelToggleVideo,
  handleBack,
  leftPanel,
  resizer,
  rightPanel,
  leftPanelStyle,
  resizerStyle,
  rightPanelStyle,
  devicePixelRatioDiff,
  finalOffsetX
} = useLayout(props, langId);

// 播放器相关
const {
  playerAudio,
  playerVideo,
  dynamicScroller,
  allSegments,
  initPlayers,
  updateOverlappingSegments,
  handleWordClick,
  handleWordDblClick,
  isWordActive,
  setupI18nWatch,
  isVideo,
  currentTime,
  updateSubtitle,
  isRtl,
  lastSentenceId,
  getActivePlayer,
  hasPlayed,
  showSubTitle
} = usePlayer(transcriptData, isShowVideo, props);
// 转写编辑相关
const {
  // 状态
  isEditRightTranscript,
  activeEditElement,
  canUndo,
  canRedo,
  editHistory,
  currentHistoryIndex,

  // 方法
  // handleEditRightTranscript,
  handleSaveRightTranscript,
  isActiveEditingSentence,
  undoOperation,
  redoOperation,
  handleCompositionStart,
  handleCompositionEnd,
  // 事件处理器
  handleRealTimeInput,
  handlePaste
} = useTranscriptEditV1(transcriptData, dynamicScroller, updateSubtitle, emit, props);
const registerDialogRef = useTemplateRef("registerDialogRef");
const handleEditRightTranscript = () => {
  registerDialogRef?.value?.setType(0);
  registerDialogRef?.value?.show();
};
// 文件信息相关
const { fileName, fileUploadTime, isShowTimestamp, formatSecondsFromMs, isEditFile } = useFileInfo(props);

// 说话人管理相关
const {
  editSpeakerDialogVisible,
  originSelectedSpeakerId,
  selectedSpeakerId,
  editingSpeakerId,
  editingSpeakerName,
  applyToAllMatching,
  speakerPopoverRef,
  speakerPopoverVisible,
  selectedPid,
  speakerBtnRef,
  isShowSpeaker,
  uniqueSpeakers,
  uniqueSpeakersMap,
  hasDuplicateSpeakers,
  handleSpeakerPopoverShow,
  handleSpeakerPopoverHide,
  openEditSpeakerDialog,
  selectSpeaker,
  confirmEditSpeaker,
  handleShowSpeaker,
  handleOutsideClick,
  scrollbarRef,
  speakerSaveLoading,
  dialogOpen,
  dialogClose,
  speakerItemsRef,
  speakerItemRef,
  popoverDupRef,
  speakerItemPopVisible,
  chooseTypes,
  handleChooseType,
  isSpeakerDuplicate,
  handleSpeakerItemMouseEnter,
  hoverSelectedSpeakerId,
  isInSpeakerPopover,
  isInSpeakerList,
  speakerPopWidth
} = useSpeaker(transcriptData, speakers, emit, props);

// 设置i18n监听
setupI18nWatch(locale, getLocaleMessage);
// 翻译语言
const rtlTranslateLangCode = [
  "ug",
  "bm-Nkoo",
  "fa",
  "ur",
  "sd",
  "ps",
  "ar",
  "iw",
  "fa-AF",
  "ms-Arab",
  "dv",
  "yi",
  "ckb",
  "pa-Arab",
  "ug"
];
const langCode = computed(() => {
  if (!langId.value) {
    return "";
  }
  return languageMap[langId.value]?.langCode;
});
const translateDirection = computed(() => {
  return rtlTranslateLangCode.includes(langCode.value) ? "rtl" : "ltr";
});
// 转录语言
const rtlTranscriptLangCode = ["fa", "ur", "sd", "ps", "ar", "he", "yi"];
const transcriptDirection = computed(() => {
  return rtlTranscriptLangCode.includes(props.fileBaseInfo.language) ? "rtl" : "ltr";
});
const eventUploadHandle = async (type) => {
  const typeMap = {
    1: "show_timestamp",
    2: "show_more_detailed_timestamp",
    0: "hide_timestamp",
    3: "speaker"
  };
  const { useCommonApi } = await import("~/api/common");
  const { collectEvent } = useCommonApi;
  await collectEvent({ eventType: typeMap[type] });
};
watch([langId, isShowSpeaker, isShowTimestamp, isShowVideo], ([v1, v2, v3, v4], [_v1, _v2, _v3, _v4]) => {
  if (v2 !== _v2) {
    eventUploadHandle(3);
  }
  if (v3 !== _v3) {
    eventUploadHandle(v3);
  }
  emit("saveConfig");
});
// 分享
const mobilePopover = ref(null);
const shareDialogRef = ref(null);
const handleShare = () => {
  shareDialogRef?.value?.handleShare(() => {
    mobilePopover.value?.hide();
  });
};
// 下载导出
const exportDialogVisible = ref(false);
const handleDownload = () => {
  registerDialogRef?.value?.setType(2);
  registerDialogRef?.value?.show();
};
const getFileConfig = () => {
  let player = null;
  if (isVideo.value) {
    player = playerVideo;
  } else {
    player = playerAudio;
  }
  return {
    lastPlayTime: player.value?.currentTime.toFixed(3), // 上次播放停留的时间
    lastPlayRate: player.value?.playbackRate, // 上次播放的播放速度
    lastPlayVolume: player.value?.muted ? 0 : player.value?.volume, // 上次播放的音量
    isShowTimestamp: isShowTimestamp.value, // 是否显示时间戳
    translateLang: langId.value, // 翻译语言
    isShowVideo: isShowVideo.value, // 是否显示视频
    isShowSpeaker: isShowSpeaker.value,
    devicePixelRatioDiff: devicePixelRatioDiff.value || 1,
    finalOffsetX: finalOffsetX.value || 0,
    hasPlayed: hasPlayed.value,
    mimeType: props.fileBaseInfo?.mimeType || "",
    showSubTitle: showSubTitle.value
  };
};

const recentLanguageKeys = ref([]);
const getRecentLang = async () => {
  const { transcriptApi } = await import("~/api/transcript");
  const res = await transcriptApi.getRecentLang();
  recentLanguageKeys.value = res.text
    .map((item) => {
      const [lang, name] = item.split("#");
      return name !== "null" ? name : languageTransMap[lang];
    })
    .filter(Boolean);
};
watchEffect(() => {
  document?.body?.setAttribute("dir", isRtl.value ? "rtl" : "ltr");
  document?.documentElement?.setAttribute("dir", isRtl.value ? "rtl" : "ltr");
});
const handleJumpUpgrade = () => {
  registerDialogRef?.value?.handleSignClick();
};
const isEditStatus = computed(() => {
  return isEditRightTranscript.value || isEditFile.value || editSpeakerDialogVisible.value;
});
useKeyEvent(isVideo.value ? playerVideo : playerAudio, isEditStatus);
const reInitPlayer = async () => {
  let player = getActivePlayer();
  const config = getFileConfig();
  const isPlaying = !player.paused;
  player?.destroy();
  await nextTick();
  await sleep(50);
  initPlayers(Object.assign(props.fileBaseInfo, config), locale, allSegments, isEditRightTranscript);
  await sleep(100);
  player = getActivePlayer();
  isPlaying && player.play();
};
watch(isDesktop, reInitPlayer);
onMounted(async () => {
  await nextTick();
  // 更新重叠段落
  updateOverlappingSegments();
  if (Sniffer.os.isPhone && !props.fileBaseInfo.mimeType) {
    const mimeType = await getMIMETypeFromURL(props.fileBaseInfo.fileUrl);
    props.fileBaseInfo.mimeType = mimeType || "";
  }
  // 初始化播放器
  initPlayers(props.fileBaseInfo, locale, allSegments, isEditRightTranscript);
  if (!props.isShare) getRecentLang();
});
onUnmounted(() => {
  playerVideo.value = null;
  playerAudio.value = null;
});
defineExpose({
  getFileConfig,
  getRecentLang
});
</script>

<style scoped lang="scss" src="./style.scss"></style>
<style lang="scss">
.mobile-popper-more-A0KQ7lsC {
  --el-color-primary: theme("colors.mainColor.900");
}
.pop-iAHFsY2 {
  --el-color-primary: theme("colors.mainColor.900");
  --el-popover-border-radius: 0.5rem;
  .el-checkbox__label {
    overflow: hidden;
  }
}
[dir="rtl"] .common-dialog-S5NaD2 {
  .el-message {
    @apply flex-row-reverse;
  }
}
.common-dialog-S5NaD2 {
  --el-border-radius-base: 0.5rem;
  --el-dialog-padding-primary: 1.25rem;
  .el-dialog__header {
    @apply mb-5 p-0 text-base font-medium;
  }
  .el-dialog__headerbtn {
    height: 4.125rem;
  }
  .el-dialog__headerbtn .el-dialog__close {
    @apply text-black;
  }
  .el-dialog__footer {
    @apply mt-11 pt-0;
  }
  .el-dialog__headerbtn {
    @apply rtl:left-0 rtl:right-auto;
  }
  .el-button + .el-button {
    // prettier-ignore
    @apply text-sm !ms-2 !ml-0;
  }
  .el-icon.el-dialog__close {
    font-size: 1.6rem;
  }
}
.el-popper.is-customized.popper-class-ZZMG2X2I {
  transition: opacity 0.15s;
  white-space: nowrap;
  color: #fff;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 0.25rem;
  padding: 0.375rem;
  line-height: 1rem;
}
.popover-textarea {
  @media (max-width: 768px) {
    .el-textarea__inner {
      resize: none !important;
    }
  }
  .el-textarea__inner {
    max-height: 10rem;
  }
}
</style>
