import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/dbConfig';

interface RestaurantAttributes {
    id: number;
    rating: number;
    name: string;
    site: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    lat: number;
    lng: number;
}
/**
 * The Restaurant model.
 */
export class Restaurant extends Model<RestaurantAttributes> implements RestaurantAttributes {
    public id!: number;
    public rating!: number;
    public name!: string;
    public site!: string;
    public email!: string;
    public phone!: string;
    public street!: string;
    public city!: string;
    public state!: string;
    public lat!: number;
    public lng!: number;
}

Restaurant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        rating: DataTypes.INTEGER,
        name: DataTypes.TEXT,
        site: DataTypes.TEXT,
        email: DataTypes.TEXT,
        phone: DataTypes.TEXT,
        street: DataTypes.TEXT,
        city: DataTypes.TEXT,
        state: DataTypes.TEXT,
        lat: DataTypes.FLOAT,
        lng: DataTypes.FLOAT,
    },
    {
        sequelize,
        modelName: 'Restaurant',
        tableName: 'Restaurants',
        timestamps: false, //enable/disable fields timestamp (createdAt y updatedAt)
    }
);
