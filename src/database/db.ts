import { Sequelize } from "sequelize-typescript";
import conf from "./config";
import Log from "./model/log.model";


var sequelize: Sequelize;
export async function init() {
    sequelize = new Sequelize(conf.mysql, {
        dialect: "mysql",
        logging: false,
    });
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
    sequelize.addModels([Log]);
    sequelize.sync({ force: conf.forceInit });
}
export default function getSequelize() {
    return sequelize;
};
