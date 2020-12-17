<template>
  <div>
    <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
        default-expand-all
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column label="2016年新生杯">
      <el-table-column
          prop="date"
          label="比赛日期"
          sortable
          width="180">
      </el-table-column>
      <el-table-column
          prop="team1"
          label="主队"
          width="180">
      </el-table-column>
      <el-table-column
          prop="score"
          label="">
      </el-table-column>
      <el-table-column
          prop="team2"
          label="客队"
          width="180">
      </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{
        id: 1,
        date: '2016-05-01',
        team1: "信科",
        team2: "医学",
        score: "1:3"
      }, {
        id: 2,
        date: '2016-05-02',
        team1: "信科",
        team2: "医学",
        score: "1:3"
      }, {
        id: 3,
        date: '2016-05-03',
        team1: "信科",
        team2: "医学",
        score: "1:3"
      }, {
        id: 4,
        date: '2016-05-04',
        team1: "信科",
        team2: "医学",
        score: "1:3"
      }, {
        id: 5,
        date: '2016-05-05',
        team1: "信科",
        team2: "医学",
        score: "3:1"
      }, {
        id: 6,
        date: '2016-05-06',
        team1: "信科",
        team2: "医学",
        score: "3:1"
      }, {
        id: 7,
        date: '2016-05-07',
        team1: "信科",
        team2: "医学",
        score: "3:1"
      }
      ]
    }
  }
}
</script>
<style scoped>
/deep/.el-table th > .cell {

  text-align: center;

}

/deep/.el-table .cell {

  text-align: center;

}
</style>