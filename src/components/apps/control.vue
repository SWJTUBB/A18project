<template>
  <div>
    <!-- 温度卡片 -->
    <b-container>
      <b-row>
        <b-col md="4">
          <b-card :title="airTempData" sub-title="空气温度" class="data-card wCard1">
            <div class="card-content">
              <v-chart :options="airTempOptions" class="card-chart" autoresize />
            </div>
            <div>
              <b-form-group label="目标温度">
                <b-input v-model="targetAirTemp" type="number" />
              </b-form-group>
              <b-button @click="setTargetAirTemp">设置</b-button>
            </div>
          </b-card>
        </b-col>
        <!-- 湿度卡片 -->
        <b-col md="4">
          <b-card :title="airHumiData" sub-title="空气湿度" class="data-card wCard2">
            <div class="card-content">
              <v-chart :options="airHumiOptions" class="card-chart" autoresize />
            </div>
            <div>
              <b-form-group label="目标湿度">
                <b-input v-model="targetAirHumi" type="number" />
              </b-form-group>
              <b-button @click="setTargetAirHumi">设置</b-button>
            </div>
          </b-card>
        </b-col>
        <!-- PH值卡片 -->
        <b-col md="4">
          <b-card :title="phValueData" sub-title="PH值" class="data-card wCard3">
            <div class="card-content">
              <v-chart :options="phValueOptions" class="card-chart" autoresize />
            </div>
            <div>
              <b-form-group label="目标PH值">
                <b-input v-model="targetPhValue" type="number" />
              </b-form-group>
              <b-button @click="setTargetPhValue">设置</b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <!-- 其他四个量的显示卡片 -->
    <b-container>
      <b-row>
        <!-- 土壤温度卡片 -->
        <b-col md="4">
          <b-card :title="soilTempData" sub-title="土壤温度" class="data-card wCard4">
            <div class="card-content">
              <v-chart :options="soilTempOptions" class="card-chart" autoresize />
            </div>
            <div>
              <b-form-group label="目标土壤温度">
                <b-input v-model="targetSoilTemp" type="number" />
              </b-form-group>
              <b-button @click="setTargetSoilTemp">设置</b-button>
            </div>
          </b-card>
        </b-col>
        <!-- 土壤湿度卡片 -->
        <b-col md="4">
          <b-card :title="soilHumiData" sub-title="土壤湿度" class="data-card wCard5">
            <div class="card-content">
              <v-chart :options="soilHumiOptions" class="card-chart" autoresize />
            </div>
            <div>
              <b-form-group label="目标土壤湿度">
                <b-input v-model="targetSoilHumi" type="number" />
              </b-form-group>
              <b-button @click="setTargetSoilHumi">设置</b-button>
            </div>
          </b-card>
        </b-col>
        <!-- 光照强度卡片 -->
        <b-col md="4">
          <b-card :title="lightIntensityData" sub-title="光照强度" class="data-card wCard6">
            <div class="card-content">
              <v-chart :options="lightIntensityOptions" class="card-chart" autoresize />
            </div>
            <div>
              <b-form-group label="目标光照强度">
                <b-input v-model="targetLightIntensity" type="number" />
              </b-form-group>
              <b-button @click="setTargetLightIntensity">设置</b-button>
            </div>
          </b-card>
        </b-col>
        <!-- 二氧化碳浓度卡片 -->
        <b-col md="4">
          <b-card :title="co2ConcentrationData" sub-title="二氧化碳浓度" class="data-card wCard7">
            <div class="card-content">
              <v-chart :options="co2ConcentrationOptions" class="card-chart" autoresize />
            </div>
            <div>
              <b-form-group label="目标二氧化碳浓度">
                <b-input v-model="targetCo2Concentration" type="number" />
              </b-form-group>
              <b-button @click="setTargetCo2Concentration">设置</b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <!-- 三个模式调节独立显示的卡片 -->
    <b-container>
      <b-row>
        <b-col md="4">
          <b-card title="光合作用模式" class="mode-card wMode1">
            <div>
              <b-button @click="startPhotosynthesisMode">启动光合作用模式</b-button>
            </div>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card title="呼吸作用模式" class="mode-card wMode2">
            <div>
              <b-button @click="startRespirationMode">启动呼吸作用模式</b-button>
            </div>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card title="蒸腾作用模式" class="mode-card wMode3">
            <div>
              <b-button @click="startTranspirationMode">启动蒸腾作用模式</b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  // 省略部分代码
};
</script>

<style scoped>
.wCard1 {
  background: linear-gradient(45deg, #321fdb 0%, #1f1498 100%);
}

.wCard2 {
  background: linear-gradient(45deg, #39f 0%, #2982cc 100%);
}

.wCard3 {
  background: linear-gradient(45deg, #f9b115 0%, #f6960b 100%);
}

.wCard4 {
  background: linear-gradient(45deg, #ff5722 0%, #c41c00 100%);
}

.wCard5 {
  background: linear-gradient(45deg, #8bc34a 0%, #558b2f 100%);
}

.wCard6 {
  background: linear-gradient(45deg, #ffc107 0%, #ffa000 100%);
}

.wCard7 {
  background: linear-gradient(45deg, #607d8b 0%, #455a64 100%);
}

.wMode1 {
  background: #4caf50;
}

.wMode2 {
  background: #f44336;
}

.wMode3 {
  background: #2196f3;
}

.card-content {
  height: 70px;
}

.card-title {
  color: white;
}

.text-muted {
  color: white !important;
}

.card-chart {
  width: 100%;
  height: 100%;
}

.card {
  box-shadow: 0 1px 1px 0 rgba(60, 75, 100, 0.14),
    0 2px 1px -1px rgba(60, 75, 100, 0.12), 0 1px 3px 0 rgba(60, 75, 100, 0.2);
  margin-top: 10px;
}

button:disabled:hover {
  cursor: not-allowed;
}
</style>
